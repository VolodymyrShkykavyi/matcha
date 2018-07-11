<?php

namespace App\Controllers;


use Interop\Container\ContainerInterface;

class UserController extends Controller
{
    private $_user = null;

    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);

        if (!empty($_SESSION['auth'])) {
            $user = $this->model->getUser($_SESSION['auth']['id']);
            $location = $this->model->getUserLocation($_SESSION['auth']['id']);

            if (!empty($user)) {
                $this->_user = $user;

                //send to view
                $this->ViewData['user']['login'] = $this->_user['login'];
                $this->ViewData['user']['status'] = $this->_user['status'];
                $this->ViewData['user']['lastAction'] = $this->_user['lastAction'];
            }
            if (!empty($location)){
                $this->ViewData['user']['location'] = $this->_formatted_location($location['lat'], $location['lng']);
            }
        }
    }

    public function home($request, $response, $args)
	{
		$this->ViewData['args'] = $args;
		$this->ViewData['users'] = print_r($this->model->getUsers(), true);
		$this->render($response, 'home.twig', 'Home Page');
	}

	public function secret($request, $response, $args)
	{
		//$this->c->logger->addInfo('Something interesting happened');
		//$this->ViewData['args'] = $args;
		echo "<div class=\"container\"><pre>";
		var_dump($this->model->getUserByLogin('admin'));
        var_dump($this->model->getUserByEmail('admin'));
        //var_dump($this->model->getUserByLogin('admin'));
		echo "</pre></div>";

		$this->render($response, 'home.twig', 'secret');
	}

	public function login($request, $response, $args)
	{
		$this->render($response, 'login.twig', 'Login Page');
	}

	public function register($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $birthday = \DateTime::createFromFormat('d/m/Y', $data['datetimepicker']);

        //get date in good format for Mysql
        if ($birthday)
            $data['birthday'] = $birthday->format('Y-m-d');

        $id = $this->model->addUser($data);
        if ($id){
            $this->_user = $this->model->getUser($id);
            $_SESSION['auth'] = [
                'login' => $this->_user['login'],
                'id' => $this->_user['id'],
                'email' => $this->_user['email'],
                'verify' => $this->_user['active']
            ];
        }
        //TODO: send mail and redirect(in data user id)

        $this->render($response, 'home.twig', 'after register');
    }

	public function authorize($request, $response, $args)
	{
		$data = $request->getParsedBody();

		if (!empty($data) && $data['login'] && $data['password']) {
			$data = $this->model->auth($data['login'], $data['password']);

			if (!empty($data)) {
				$_SESSION['auth'] = [
					'id' => $data['id'],
					'login' => $data['login'],
					'email' => $data['email'],
                    'verify' => $data['active']
					//TODO: token, check session array
				];
			}
		}

		return $response->withRedirect('/');
	}

    public function verify($request, $response, $args)
    {
        var_dump($_SERVER);
        if (!empty($args) && !empty($args['token'])){
            $this->ViewData['args'] = $args;
            if ($this->model->updateUserActive($this->_user['id'], true)){
                $_SESSION['auth']['verify'] = 1;
                return $response->withRedirect('/');
            } else {
                $this->ViewData['errors'] = 'error in changing verify status';
            }
        }

        $this->ViewData['session'] = $_SESSION;
        return $this->render($response, 'verify.twig', 'Verify account');
    }

	public function logout($request, $response, $args)
    {
        unset($_SERVER['auth']);
        session_destroy();

        return $response->withRedirect('/');
    }

    public function accountSettings($request, $response, $args)
    {
        $this->render($response, 'settings.twig', 'Account settings');
    }

    public function changeStatus($request, $response, $args)
	{
		$data = $request->getParsedBody();

		$res = $this->model->updateStatus($this->_user['id'], $data['status']);
		return json_encode($res);
	}

    public function changePassword($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $res = false;

        if (!empty($data) && $data['current'] && $data['new_psw'] && $data['confirm'] &&
            $data['new_psw'] == $data['confirm']){
            if (preg_match('/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/', $data['new_psw']) &&
                strlen($data['new_psw']) >= 6){
                $res = $this->model->updatePassword($this->_user['id'], $data['current'], $data['new_psw']);
            }
        }
        return json_encode($res);
    }

    public function changeLocation($request, $response, $args)
    {
        $data = $request->getParsedBody();

        if (!empty($data) && $data['lat'] && $data['lng']){
            return json_encode($this->model->updateLocation($this->_user['id'], $data['lat'], $data['lng']));
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
            $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
            //TODO: change
            return print_r('need find user by ip, finded ip = ' . $ip, true);
        }

        return json_encode(false);
    }


    private function _formatted_location($lat, $lng)
    {
             $url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='.trim($lat).','.trim($lng).'&sensor=false';
            $json = @file_get_contents($url);
            $data = json_decode($json);
            $status = @$data->status;
            $addr = "";

            if($status=="OK"){
                $address_components = $data->results[0]->address_components;
                if (!empty($address_components)){
                    $addr = $address_components[2]->long_name;
                    $addr .= ", ".$address_components[3]->long_name;
                    $addr .= ", ".$address_components[6]->long_name;
                }
            }

            return $addr;
    }
}
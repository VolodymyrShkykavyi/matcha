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
            if (!empty($user)) {
                $this->_user = $user;

                //send to view
                $this->ViewData['user']['login'] = $this->_user['login'];
                $this->ViewData['user']['status'] = $this->_user['status'];
                $this->ViewData['user']['lastAction'] = $this->_user['lastAction'];
            }
        }
    }

    public function home($request, $response, $args)
	{

        echo "<div class=\"container\"><pre>";
        $data = [
            'login' => 'admin3',
            'email' => 'mail3',
            'password' => '1234567890',
            'fname' => 'fn',
            'lname' => 'ln',
            'gender' => 'man',
            'birthDate' => '2018-07-10'
        ];
        var_dump($_SESSION);
        //var_dump($this->model->getUserByLogin('admin'));
        echo "</pre></div>";


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
                'email' => $this->_user['email']
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
					//TODO: token, check session array
				];
			}
		}

		return $response->withRedirect('/');
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

}
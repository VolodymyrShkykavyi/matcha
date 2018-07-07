<?php

namespace App\Controllers;


class UserController extends Controller
{
	public function home($request, $response, $args)
	{
		$this->ViewData['args'] = $args;
		$this->ViewData['users'] = $this->model->getUsers();
		$this->render($response, 'home.twig', 'Home Page');
	}

	public function secret($request, $response, $args)
	{
		//$this->c->logger->addInfo('Something interesting happened');
		//$this->ViewData['args'] = $args;
		echo "<div class=\"container\">";
		var_dump($_SESSION);
		echo "</div>";

		$this->render($response, 'home.twig');
	}

	public function login($request, $response, $args)
	{
		$this->render($response, 'login.twig', 'Login Page');
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
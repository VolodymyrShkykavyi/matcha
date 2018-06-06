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
		$this->render($response, 'home.twig');
	}
}
<?php

namespace App\Controllers;


class UserController extends Controller
{
	public function home($request, $response, $args)
	{
		echo "<pre>";
		var_dump($args);
		echo "</pre>";
		$this->c->view->render($response, 'home.twig');
	}

	public function secret($request, $response, $args)
	{
		$this->c->logger->addInfo('Something interesting happened');
		echo "<pre>";
		var_dump($args);
		echo "</pre>SECRET !!!!";
		$this->c->view->render($response, 'home.twig');
	}
}
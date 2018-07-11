<?php

namespace App\Controllers;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;

abstract class Controller
{
	protected $c;
	protected $model;
	protected $ViewData = [];

	public function __construct(ContainerInterface $container)
	{
		$this->c = $container;
		$modelPath = preg_replace('/Controller/', 'Model', static::class);
		$this->loadModel($modelPath);
	}

	public function __get($name)
	{
		return $this->c->get($name);
	}

	/**
	 * @param ResponseInterface $response
	 * @param string $name - path to view from Twig view's directory
	 */
	protected function render(ResponseInterface $response, $name, $title='')
	{
		if (!isset($this->ViewData['title'])){
			$this->ViewData['title'] = $title;
		}
		$this->c->view->render($response, $name, $this->ViewData);
	}

	/**
	 * @param $name - model name
	 */
	protected function loadModel($name)
	{
		if (strpos($name, '\\') === false) {
			if (!preg_match('/Model$/', $name)){
				$name .= 'Model';
			}
			$name = 'App\Models\\' . ucfirst($name);
		}
		if (class_exists($name)) {
			$this->model = new $name($this->c);
		}
		else{
			$this->model = null;
		}
	}
}
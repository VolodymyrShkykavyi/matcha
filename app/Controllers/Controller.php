<?php

namespace App\Controllers;

use Interop\Container\ContainerInterface;


abstract class Controller
{
	protected $c;

	public function __construct(ContainerInterface $container)
	{
		$this->c = $container;
	}

	public function __get($name)
	{
		return $this->c->get($name);
	}
}
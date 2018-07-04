<?php

namespace App\Middleware;

use Slim\Http\Response;
use Slim\Http\Request;
use Slim\Interfaces\RouterInterface;

class RedirectIfUnauthorized
{
	protected $router;

	public function __construct(RouterInterface $router)
	{
		$this->router = $router;
	}

	public function __invoke(Request $request, Response $response, callable $next)
	{
		if (!isset($_SESSION['auth']) || !isset($_SESSION['auth']['id'])){
			return $response->withRedirect($this->router->pathFor('user.login'));
		}
		return $next($request, $response);
	}
}
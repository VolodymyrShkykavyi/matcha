<?php

namespace App\Middleware;

use Slim\Http\Response;
use Slim\Http\Request;
use Slim\Interfaces\RouterInterface;

class RedirectIfUnverified
{
	protected $router;

	public function __construct(RouterInterface $router)
	{
		$this->router = $router;
	}

	public function __invoke(Request $request, Response $response, callable $next)
	{
		if (isset($_SESSION['auth']) && !empty($_SESSION['auth'])){
			if (!$_SESSION['auth']['verify']){
				return $response->withRedirect($this->router->pathFor('user.verify'));
			}
		}
		return $next($request, $response);
	}
}
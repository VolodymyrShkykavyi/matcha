<?php

namespace App\Middleware;

use Slim\Http\Response;
use Slim\Http\Request;
use Slim\Interfaces\RouterInterface;

class RedirectIfAuthorized
{
    protected $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    public function __invoke(Request $request, Response $response, callable $next)
    {
        if (isset($_SESSION['auth']) && isset($_SESSION['auth']['id'])){
            return $response->withRedirect($this->router->pathFor('user.home'));
        }
        return $next($request, $response);
    }
}
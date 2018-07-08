<?php

use App\Controllers\UserController;
use App\Middleware\RedirectIfAuthorized;
use App\Middleware\RedirectIfUnauthorized;
use App\Middleware\UpdateLastUserAction;
use App\Library\DbInit;

$app->get('/install', DbInit::class);

$app->get('/', function(){})
	->add(new RedirectIfAuthorized($container['router']))
	->add(new RedirectIfUnauthorized($container['router']));

$app->map(['GET', 'POST'],'/{id:[0-9]+}', UserController::class.':home')
	->setName('user.info');


//pages only for unauthorized users
$app->group('', function(){
	$this->get('/login', UserController::class.':login')->setName('user.login');
	$this->post('/login', UserController::class.':authorize');
	$this->post('/register', UserController::class.':register')->setName('user.register');
})->add(new RedirectIfAuthorized($container['router']));


//pages only for authorized users
$app->group('', function (){
	$this->get('/secret', UserController::class.':home')->setName('user.home');
    $this->get('/logout', UserController::class.':logout');
    $this->get('/settings', UserController::class.':accountSettings')->setName('user.settings');
})  ->add(new RedirectIfUnauthorized($container['router']))
    ->add(new UpdateLastUserAction($container['db']));
<?php

use App\Controllers\UserController;
use App\Middleware\RedirectIfAuthorized;
use App\Middleware\RedirectIfUnauthorized;
use App\Library\DbInit;

$app->get('/install', DbInit::class);

$app->get('/', UserController::class . ':secret');
$app->map(['GET', 'POST'],'/{id:[0-9]+}', UserController::class . ':home')
	->setName('login');


//pages only for unauthorized users
$app->group('', function(){

})->add(new RedirectIfAuthorized($container['router']));


//pages only for authorized users
$app->group('', function (){
	$this->get('/secret', UserController::class . ':secret')->setName('secret');

})->add(new RedirectIfUnauthorized($container['router']));
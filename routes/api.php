<?php
use App\Controllers\UserController;
use App\Middleware\RedirectIfUnauthorized;

//only for authorized users
$app->group('', function (){
	$this->post('/status/change', UserController::class.':changeStatus');
})->add(new RedirectIfUnauthorized($container['router']));

<?php
use App\Controllers\UserController;
use App\Middleware\RedirectIfUnauthorized;

//only for authorized users
$app->group('', function (){
	$this->post('/status/change', UserController::class.':changeStatus');
	$this->post('/location/change', UserController::class.':changeLocation');
	$this->post('/password/change', UserController::class.':changePassword');
})->add(new RedirectIfUnauthorized($container['router']));

<?php
use App\Controllers\UserController;
use App\Middleware\RedirectIfUnauthorized;

//only for authorized users
$app->group('', function (){
	// $this->post('/profile/chat/login', UserController::class.':login');
	$this->post('/profile/chat', UserController::class.':ChatRoom1');
	$this->post('/status/change', UserController::class.':changeStatus');
	$this->post('/location/change', UserController::class.':changeLocation');
	$this->post('/password/change', UserController::class.':changePassword');
	$this->post('/friend/change', UserController::class.':changeFriendRequest');
	$this->post('/info/get', UserController::class.':getMyInfo');
	$this->post('/chat/mess', UserController::class.':ChatRoom');
})->add(new RedirectIfUnauthorized($container['router']));

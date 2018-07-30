<?php
use App\Controllers\UserController;
use App\Controllers\ApiController;
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
	$this->post('/profile/personal/change', UserController::class.':changePersonalInfo');
	$this->post('/check/email', ApiController::class.':checkEmail');
	$this->post('/check/login', ApiController::class.':checkLogin');
	$this->post('/photo/upload', ApiController::class.':uploadPhoto');
	$this->post('/tag/add', ApiController::class.':addTag');
    $this->post('/tag/delete', ApiController::class.':deleteTag');

})->add(new RedirectIfUnauthorized($container['router']));

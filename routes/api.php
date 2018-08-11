<?php
use App\Controllers\UserController;
use App\Controllers\ApiController;
use App\Middleware\RedirectIfUnauthorized;

//only for authorized users
$app->group('', function (){
	// $this->post('/profile/chat/login', UserController::class.':login');
	$this->post('/chat/getUnread', UserController::class.':getCountUnreadMess');
	$this->post('/chat/read', UserController::class.':allRead');
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
	$this->post('/photo/delete', ApiController::class.':deletePhoto');
	$this->post('/photo/avatar', ApiController::class.':changeAvatar');
	$this->post('/tag/add', ApiController::class.':addTag');
    $this->post('/tag/delete', ApiController::class.':deleteTag');
    $this->post('/profile/block', ApiController::class.':blockUser');
    $this->post('/search', UserController::class.':Search');
    
})->add(new RedirectIfUnauthorized($container['router']));

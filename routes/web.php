<?php

use App\Controllers\UserController;
use App\Controllers\ApiController;
use App\Middleware\RedirectIfAuthorized;
use App\Middleware\RedirectIfUnauthorized;
use App\Middleware\RedirectIfUnverified;
use App\Middleware\UpdateLastUserAction;
use App\Library\DbInit;


$app->get('/install', DbInit::class);
$app->get('/verification/token={token}/{login}', UserController::class.':verification');


$app->get('/', function(){})
	->add(new RedirectIfAuthorized($container['router']))
	->add(new RedirectIfUnauthorized($container['router']));

$app->map(['GET', 'POST'],'/{id:[0-9]+}', UserController::class.':home')
	->setName('user.info');


//pages only for unauthorized users
$app->group('', function(){
	$this->get('/login', UserController::class.':login')->setName('user.login');
	$this->post('/login', UserController::class.':authorize');
	$this->get('/forgotPass', UserController::class.':forgotPass');
	$this->post('/pass_rec', UserController::class.':passRec');
	$this->post('/pass_rec/{token}/{login}', UserController::class.':passRecRef');
	$this->post('/register', UserController::class.':register')->setName('user.register');
})->add(new RedirectIfAuthorized($container['router']));


//pages only for authorized users
$app->group('', function (){
	//only for verified users
	$this->group('', function(){
		$this->get('/profile', UserController::class.':home')->setName('user.home');
		$this->get('/profile/{id:[0-9]+}', UserController::class.':getProfile')->setName('user.profile');
		$this->get('/settings', UserController::class.':accountSettings')->setName('user.settings');
		$this->get('/friends', UserController::class.':friends');
		$this->get('/profile/{id:[0-9]+}/friends', UserController::class.':getUserFriends');
		$this->get('/profile/{id:[0-9]+}/photos', UserController::class.':getUserPhotos');
		$this->get('/friends/requests', UserController::class.':friendRequests');
		$this->get('/chat[/{id:[0-9]+}]', UserController::class.':chat');
		$this->get('/photo[/{avatar:avatar}]', UserController::class.':showPhotoPage');
		$this->get('/notifications', UserController::class.':getNotifications');
		$this->get('/reports', UserController::class.':getBlockReports');
		$this->get('/search', UserController::class.':getSearchPage');
		$this->get('/map', ApiController::class.':showUsersMap');
	})->add(new RedirectIfUnverified($this->getContainer()['router']));

	$this->get('/logout', UserController::class.':logout');
	$this->get('/verify[/token={token}]', UserController::class.':verify')->setName('user.verify');
}) ->add(new RedirectIfUnauthorized($container['router']));

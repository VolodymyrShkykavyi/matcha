<?php

namespace App\Controllers;


use Interop\Container\ContainerInterface;

class UserController extends Controller
{
	private $_user = null;

	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);

		if (!empty($_SESSION['auth'])) {
			$user = $this->model->getUser($_SESSION['auth']['id']);

			if (!empty($user)) {
				$this->_user = $user;
				$location = $this->model->getUserLocation($this->_user['id']);
				$friendRequests = $this->model->getFriendRequests($this->_user['id']);
				$notification_num = $this->model->countNotifications($this->_user['id']);
				$friends = $this->model->getFriends($this->_user['id']);
				$chats = $this->model->getChatRooms($this->_user['id']);
				
				$i = 0;
				if (empty($this->_user['img'])) {
					$this->_user['img'] = '/author-main1.jpg';
					$this->_user['no_img'] = 1;
				}

				foreach ($chats as $value) {
					if ($value["id_sob"] == $this->_user['id']) {

						$value["id_sob"] = $value["id_user"];
					}
					$unread_mess =  $this->model->getUnreadMessage($value["id_sob"], $value["id"], 0);
					// $value["count_unread"] = count($unread_mess);

					$value["count_unread"] = count($unread_mess);
					$value["id_user"] = $this->_user['id'];
					$value["last_mess"] = $this->model->getLastMessage($value["id_sob"], $value['id']);
					$this->ViewData['chats'][$i] = $value;
					$i++;

				}
				//send to view
				$this->ViewData['user'] = $this->_user;
				$this->ViewData['user']['location'] = $this->_formatted_location($location['lat'], $location['lng']);
				$this->ViewData['user']['lat_lng'] = $location;
				$this->ViewData['num_requests'] = count($friendRequests);
				$this->ViewData['num_notifications'] = $notification_num;
				foreach ($friends as &$friend) {
					$id = ($friend['from_request'] == $this->_user['id']) ? $friend['to_request'] : $friend['from_request'];
					$friend['profile'] = $this->model->getUser($id);
				}

				$this->ViewData['friends'] = $friends;

			}

		}
	}

	public function home($request, $response, $args)
	{

		$this->render($response, 'home.twig', 'Home Page');
	}

	public function getProfile($request, $response, $args)
	{
		$this->ViewData['args'] = $args;
		$profile = $this->model->getUser($args['id']);
		$location = $this->model->getUserLocation($args['id']);

		if (!empty($profile) && $profile['active'] && $profile['id'] != $this->_user['id']) {
			if (empty($profile['img'])) {
				$profile['img'] = '/author-main1.jpg';
			}
			$this->ViewData['profile'] = $profile;
			$this->ViewData['profile']['friendship'] = $this->model->getFriend($this->_user['id'], $args['id']);
			if (!empty($location)) {
				$this->ViewData['profile']['location'] = $this->_formatted_location($location['lat'], $location['lng']);
			}

		} else {
			return $response->withRedirect('/');
		}
		if (!empty($this->_user))
			$this->model->addNotificationViewProfile($this->_user['id'], $profile['id']);

		$this->render($response, 'profile.twig', 'Home Page');
	}

	public function getNotifications($request, $response, $args)
	{
		$this->ViewData['num_notifications'] = 0;
		$this->ViewData['notifications'] = $this->model->getNotifications($this->_user['id']);
		foreach ($this->ViewData['notifications'] as &$notification) {
			$notification['profile'] = $this->model->getUser($notification['id_user_from']);
		}

		$this->model->updateNotificationsViewed($this->_user['id']);
		$this->render($response, 'notifications.twig', "Notifications");
	}

	public function secret($request, $response, $args)
	{
		//$this->c->logger->addInfo('Something interesting happened');
		//$this->ViewData['args'] = $args;
		echo "<div class=\"container\"><pre>";
		var_dump($this->model->getUserByLogin('admin'));
		var_dump($this->model->getUserByEmail('admin'));
		//var_dump($this->model->getUserByLogin('admin'));
		echo "</pre></div>";

		$this->render($response, 'home.twig', 'secret');
	}

	public function login($request, $response, $args)
	{
		$this->render($response, 'login.twig', 'Login Page');
	}

	public function register($request, $response, $args)
	{
		$data = $request->getParsedBody();
		$birthday = \DateTime::createFromFormat('d/m/Y', $data['datetimepicker']);

		//get date in good format for Mysql
		if ($birthday)
			$data['birthday'] = $birthday->format('Y-m-d');

		$id = $this->model->addUser($data);
		if ($id) {
			$this->_user = $this->model->getUser($id);
			$_SESSION['auth'] = [
				'login' => $this->_user['login'],
				'id' => $this->_user['id'],
				'email' => $this->_user['email'],
				'verify' => $this->_user['active']
			];
		}
		//TODO: send mail and redirect(in data user id)

		return $response->withRedirect('/');
	}

	public function showPhotoPage($request, $response, $args)
	{

		$this->render($response, 'uploadPhoto.twig', 'Photos');
	}

	public function authorize($request, $response, $args)
	{
		$data = $request->getParsedBody();

		if (!empty($data) && $data['login'] && $data['password']) {
			$data = $this->model->auth($data['login'], $data['password']);

			if (!empty($data)) {
				$_SESSION['auth'] = [
					'id' => $data['id'],
					'login' => $data['login'],
					'email' => $data['email'],
					'verify' => $data['active']
					//TODO: token, check session array
				];
			}
		}

		return $response->withRedirect('/');
	}

	public function verify($request, $response, $args)
	{
		var_dump($_SERVER);
		if (!empty($args) && !empty($args['token'])) {
			$this->ViewData['args'] = $args;
			if ($this->model->updateUserActive($this->_user['id'], true)) {
				$_SESSION['auth']['verify'] = 1;
				return $response->withRedirect('/');
			} else {
				$this->ViewData['errors'] = 'error in changing verify status';
			}
		}

		$this->ViewData['session'] = $_SESSION;
		return $this->render($response, 'verify.twig', 'Verify account');
	}

	public function logout($request, $response, $args)
	{

		unset($_SERVER['auth']);
		session_destroy();

		return $response->withRedirect('/');
	}

	public function accountSettings($request, $response, $args)
	{
		$this->ViewData['user']['firstName'] = $this->_user['firstName'];
		$this->ViewData['user']['lastName'] = $this->_user['lastName'];
		$birthday = \DateTime::createFromFormat('Y-m-d', $this->_user['birthDate']);

		if ($birthday)
			$birthday = $birthday->format('d/m/Y');
		$this->ViewData['user']['birthDate'] = $birthday;
		$this->ViewData['user']['email'] = $this->_user['email'];
		$this->ViewData['user']['details'] = $this->model->getUserDetails($this->_user['id']);


		$this->ViewData['user']['tags'] = $this->model->getTags($this->_user['id']);




		$this->render($response, 'settings.twig', 'Account settings');
	}

	public function changeStatus($request, $response, $args)
	{
		$data = $request->getParsedBody();

		$res = $this->model->updateStatus($this->_user['id'], $data['status']);
		return json_encode($res);
	}

	public function changePassword($request, $response, $args)
	{
		$data = $request->getParsedBody();
		$res = false;

		if (!empty($data) && $data['current'] && $data['new_psw'] && $data['confirm'] &&
			$data['new_psw'] == $data['confirm']) {
			if (preg_match('/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/', $data['new_psw']) &&
				strlen($data['new_psw']) >= 6) {
				$res = $this->model->updatePassword($this->_user['id'], $data['current'], $data['new_psw']);
			}
		}
		return json_encode($res);
	}

	public function friends($request, $response, $args)
	{
		$this->render($response, 'friends.twig', 'Friends');
	}

	public function friendRequests($request, $response, $args)
	{
		$this->ViewData['requests'] = $this->model->getFriendRequests($this->_user['id']);
		foreach ($this->ViewData['requests'] as &$request) {
			if (isset($request['from_request'])) {
				$request['profile'] = $this->model->getUser($request['from_request']);
				if (empty($request['profile']['img'])) {
					$request['profile']['img'] = '/author-main1.jpg';
				}
			}
		}

		$this->render($response, 'friendRequests.twig', 'Friend requests');
	}

	public function changeLocation($request, $response, $args)
	{
		$data = $request->getParsedBody();

		if (!empty($data) && $data['lat'] && $data['lng']) {
			return json_encode($this->model->updateLocation($this->_user['id'], $data['lat'], $data['lng']));
		}

		return json_encode(false);
	}

	public function changeFriendRequest($request, $response, $args)
	{
		$data = $request->getParsedBody();
		$res = false;

		if (!empty($data) && $data['type'] && $data['targetId'] && $data['targetId'] != $this->_user['id']) {
			if ($data['type'] == 'add' && empty($this->_user['no_img'])) {
				$res = $this->model->addFriend($this->_user['id'], $data['targetId']);
			} elseif ($data['type'] == 'remove_friend' || $data['type'] == 'remove_request') {
				$res = $this->model->removeFriend($this->_user['id'], $data['targetId']);
				$this->model->addNotificationRemoveFriend($this->_user['id'], $data['targetId']);
			} elseif ($data['type'] == 'accept') {
				$res = $this->model->acceptFriend($this->_user['id'], $data['targetId']);
				$this->model->addNotificationAcceptFriendRequest($this->_user['id'], $data['targetId']);
			}
		}

		return json_encode($res);
	}

	public function changePersonalInfo($request, $response, $args)
	{
		$data = $request->getParsedBody();
		$res = false;

		if (!empty($data['login']) && !empty($data['email']) && !empty($data['datetimepicker']) &&
			!empty($data['lat']) && !empty($data['lng']) && !empty($data['sexual_preferenses']) &&
			!empty($data['gender'])) {

			$data['login'] = htmlspecialchars($data['login']);
			$data['email'] = htmlspecialchars($data['email']);
			$birthday = \DateTime::createFromFormat('d/m/Y', $data['datetimepicker']);

			//get date in good format for Mysql
			if ($birthday)
				$data['birthday'] = $birthday->format('Y-m-d');
			$data['description'] = htmlspecialchars($data['description']);
			$data['fb_page'] = htmlspecialchars($data['fb_page']);
			$data['twitter_page'] = htmlspecialchars($data['twitter_page']);

			$res =  $this->model->updateUserPersonalInfo($this->_user['id'], $data);

			return json_encode($res);

		}

		return json_encode($res);
	}

	public function getMyInfo($request, $response, $args)
	{
		echo json_encode($_SESSION['auth']);
	}

	public function ChatRoom($request, $response, $args)
	{

		$data = $request->getParsedBody();

		$all_mess = $this->model->getMessage($data['room_id'], $data['start']);
		if($all_mess != NULL)
		{
			if($all_mess[0]["id_user_from"] == $this->_user['id'])
			$user_sob = $this->model->getUser($all_mess[0]["id_user_to"]);
			else if($all_mess[0]["id_user_to"] == $this->_user['id'])
			$user_sob = $this->model->getUser($all_mess[0]["id_user_from"]);
		}	
		if($all_mess == NULL)
		{
			$curr_room = $this->model->getChatRoomById($data['room_id']);
			if($curr_room[0]['id_user'] == $this->_user['id'])
			{
					$user_sob = $this->model->getUser($curr_room[0]['id_sob']);
					$friends = $this->model->getFriend($this->_user['id'], $user_sob['id']);
					if($friends['id'] == "")
						return "";
			}
			else if($curr_room[0]['id_sob'] == $this->_user['id'])
			{
					$user_sob = $this->model->getUser($curr_room[0]['id_user']);
					$friends = $this->model->getFriend($this->_user['id'], $user_sob['id']);
					if($friends['id'] == "")
						return "";
			}
			else{

					return "";
			}
		}
		if($data['start'] < 2)
		{
			$chat_field = '<div class="ui-block-title"><h6 class="title"><h6 class="title">' . $user_sob['login'] .	 '</h6></div>';
			$chat_field = $chat_field . '<div id="scroll" class="scroll" data-mcs-theme="dark"><ul 	id="chat_mess_ul" class="notification-list chat-message chat-message-field">';
			if($all_mess != NULL)
			{ 
				foreach ($all_mess as $value) {

					if($value['id_user_from'] == $this->_user['id'])
						$who = $this->_user;
					else
						$who = $user_sob;
					$chat_field = $chat_field . '<li><div class="author-thumb"><img src="/img' .$who['img'] . '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="#" class="h6 notification-friend">' . $who['login'] . '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' . $value['date_creation'] . '</time></span><br/><span class="chat-message-item" >' . $value['messadge'] . '</span></div></li>'; 
				}
			}
			else
			{
				$chat_field = $chat_field . '<li><div class="notification-event"><span class="chat-message-item">Messedge history is empty</span></div></li>';
			}
			echo $chat_field ;
		}
		else
		{
			if($all_mess != NULL)
			{ 
				foreach ($all_mess as $value) {

					if($value['id_user_from'] == $this->_user['id'])
						$who = $this->_user;
					else
						$who = $user_sob;
					$chat_field = $chat_field . '<li><div class="author-thumb"><img src="/img' .$who['img'] . '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="#" class="h6 notification-friend">' . $who['login'] . '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' . $value['date_creation'] . '</time></span><br/><span class="chat-message-item" >' . $value['messadge'] . '</span></div></li>'; 
				}
				return($chat_field);
			}
			else
			{
				return("END");
			}
		}
	}

	public function ChatRoom1($request, $response, $args)
	{
		$data = $request->getParsedBody();
		
		if (!empty($data) && $data['targetId'] && $data['targetId'] != $this->_user['id']) {
			$friends = $this->model->getFriend($this->_user['id'], $data['targetId']);
			if($friends['id'])
			{
				$res = $this->model->getChatRooms($this->_user['id']);
				foreach ($res as $value) {
					if ($value["id_sob"] == $data['targetId'])
						$c = 1;
					if ($value["id_user"] == $data['targetId'])
						$c = 1;
				}
				if (!$c) {
					$this->model->addChatRoom($this->_user['id'], $data['targetId']);
					$res = $this->model->getChatRooms($this->_user['id']);
					foreach ($res as $value) {
						if ($value["id_sob"] == $data['targetId'])
							return $value["id"];
						if ($value["id_user"] == $data['targetId'])
							return $value["id"];
					}
				} else {
					foreach ($res as $value) {
						if ($value["id_sob"] == $data['targetId'])
							return $value["id"];
						if ($value["id_user"] == $data['targetId'])
							return $value["id"];
					}
				}
			} else {
				return 0;
			}
		}
		else
			return 0;
	}

	private function _formatted_location($lat, $lng)
	{
		$url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' . trim($lat) . ',' . trim($lng) . '&sensor=false';
		$json = @file_get_contents($url);
		$data = json_decode($json);
		$status = @$data->status;
		$addr = "";

		// check for over_query_limit status
		while ($status == "OVER_QUERY_LIMIT") {
			sleep(0.2); // seconds
			$json = @file_get_contents($url);
			$status = json_decode($json)->status;
		}

		if ($status == "OK") {
			if (!empty($data->results)) {
				$address_components = $data->results[0]->address_components;
				if (!empty($address_components)) {
					$addr = $address_components[2]->long_name;
					if (!empty($address_components[3]))
						$addr .= ", " . $address_components[3]->long_name;
					if (!empty($address_components[6]))
						//TODO: better finding
						$addr .= ", " . $address_components[6]->long_name;
				}
			}
		}

		return $addr;
	}


	public function chat($requests, $response, $args)
	{
		$this->ViewData['arg'] = $args;
		$this->ViewData['mydata'] = ['dr' => 1];
		$this->render($response, "chat.twig", "chat");
	}
}
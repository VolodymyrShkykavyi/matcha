<?php 

namespace App\Controllers;


use Interop\Container\ContainerInterface;
use DateTime;

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
				$num_messages = $this->model->getAllUnreadMessage($this->_user['id']);
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
				$this->ViewData['num_messages'] = $num_messages;
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
		$this->ViewData['rating'] = $this->_calculateUserRating($this->_user['id']);
		$this->ViewData['info'] = [];

		$details = $this->model->getUserDetails($this->_user['id']);

		if (!empty($this->_user['no_img']))
			$this->ViewData['info'][] = "Upload avatar. It will help you find pair!";
		if (empty($details['description']))
			$this->ViewData['info'][] = "Please add some description about you.";
		if (empty($details['fb_page']))
			$this->ViewData['info'][] = "Add reference on your facebook page to get more rating";
		if (empty($details['twitter_page']))
			$this->ViewData['info'][] = "Add reference on your twitter page to get more rating";
		if (empty($this->_user['status']))
			$this->ViewData['info'][] = "Add some status to your profile. Let another people know what in your minds now!";

		$users = $this->_userSuggestions();
		$this->ViewData['profile_suggestions'] = array_slice($users, 0, 4);

		$this->render($response, 'home.twig', 'Home Page');
	}

	public function Search($request, $response, $args)
	{
		$all_users = $this->model->get20Users();
		$res = $all_users;
		$i = 0;
		foreach ($all_users as $user) {
			$data[$i]['id'] = $user['id'];
			$data[$i]['image'] = $user['img'];
			$data[$i]['name'] = $user["firstName"] . " " . $user["lastName"] . " aka " . $user["login"];
			$data[$i]['message'] = "1 mutual";
			$data[$i]['icon'] = "olymp-happy-face-icon";
			$i++;
		}
		return json_encode($data);
	}

	public function LoadSearch($request, $response, $args)
	{
		$data1 = $request->getParsedBody();
		$all_users = $this->model->LoadSearchUsers($data1['query']);
		$res = $all_users;
		$i = 0;
		foreach ($all_users as $user) {
			$data[$i]['id'] = $user['id'];
			$data[$i]['image'] = $user['img'];
			$data[$i]['name'] = $user["firstName"] . " " . $user["lastName"] . " aka " . $user["login"];
			$data[$i]['message'] = "1 mutual";
			$data[$i]['icon'] = "olymp-happy-face-icon";
			$i++;
		}
		return json_encode($data);
	}

	public function getSearchPage($request, $response, $args)
	{
		// $users = $this->_userSuggestions();
		$users = $this->model->get20Users();
		//show max 10 profiles
		foreach ($users as &$user) {
			$user['age'] = DateTime::createFromFormat('Y-m-d', $user['birthDate'])
			->diff(new DateTime('now'))
			->y;
			$user['rating'] = $this->_calculateUserRating($user['id']);
			$user['distanse'] = $this->_calculateDistanse(
				$this->ViewData['user']['lat_lng']['lat'], $this->ViewData['user']['lat_lng']['lng'],
				$user['lat'], $user['lng']
			);
		}
		$this->ViewData['search'] = $users;

		$this->render($response, 'search.twig', 'Find pair');
	}

	public function getProfile($request, $response, $args)
	{
		$this->ViewData['args'] = $args;
		$profile = $this->model->getUser($args['id']);
		$location = $this->model->getUserLocation($args['id']);

		if (!empty($profile) && $profile['active'] && $profile['id'] != $this->_user['id']) {
			if (!empty($this->_user) && !$this->_user['blocked'])
				$this->model->addNotificationViewProfile($this->_user['id'], $profile['id']);

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
		$this->ViewData['photos'] = $this->model->getPhotos($this->_user['id']);
		if (!empty($args)){
			$this->ViewData['showAvatartInfo'] = 1;
		}
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

	public function getBlockReports($request, $response, $args)
	{
		if (!$this->_user['admin']){
			return $response->withRedirect('/');
		}

		$this->ViewData['reports'] = $this->model->getAllReports();
		foreach ($this->ViewData['reports'] as &$report) {
			$user = $this->model->getUser($report['id_user']);
			$report['login'] = $user['login'];
		}
		return $this->render($response, 'reports.twig', 'Reports');
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
		$this->_calculateUserRating($this->_user['id']);
		
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
				if($res)
					$res = $this->model->setAllMessRead1($data['targetId'], $this->_user['id']);
				if ($data['type'] == 'remove_friend'){
					$this->model->addNotificationRemoveFriend($this->_user['id'], $data['targetId']);
				}
			} elseif ($data['type'] == 'accept') {
				$res = $this->model->acceptFriend($this->_user['id'], $data['targetId']);
				$this->model->addNotificationAcceptFriendRequest($this->_user['id'], $data['targetId']);
			}

			$this->_calculateUserRating($this->_user['id']);
			$this->_calculateUserRating($data['targetId']);
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

			$this->_calculateUserRating($this->_user['id']);
			$res =  $this->model->updateUserPersonalInfo($this->_user['id'], $data);

			return json_encode($res);

		}

		return json_encode($res);
	}

	public function getMyInfo($request, $response, $args)
	{
		echo json_encode($_SESSION['auth']);
	}

	public function allRead($request, $response, $args)
	{
		$data = $request->getParsedBody();
		$res = false;

		$res = $this->model->setAllMessRead($data['room_id'], $this->_user['id']);
		return $res;
	}

	public function getCountUnreadMess($request, $response, $args)
	{
		$data = $request->getParsedBody();

		$res =  $this->model->getUnreadMessage1($this->_user['id'], $data['room_id'], 0);
		return $res;
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
			$chat_field = '<div class="ui-block-title"><h6 class="title"><h6 class="title"><a href="' . "/profile/" . $user_sob['id'] . '"class="h6 notification-friend" >' . $user_sob['login'] .	 '</a></h6></div>';
			$chat_field = $chat_field . '<div id="scroll" class="scroll" data-mcs-theme="dark"><ul 	id="chat_mess_ul" class="notification-list chat-message chat-message-field">';
			if($all_mess != NULL)
			{
				$all_mess = array_reverse($all_mess);
				foreach ($all_mess as $value) {

					if($value['id_user_from'] == $this->_user['id'])
						$who = $this->_user;
					else
						$who = $user_sob;
					$chat_field = $chat_field . '<li id="' . $value['id_message'] . '" ><div class="author-thumb"><img src="/img' .$who['img'] . '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="' . "/profile/" . $who['id'] . '" class="h6 notification-friend">' . $who['login'] . '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' . $value['date_creation'] . '</time></span><br/><span class="chat-message-item" >' . $value['messadge'] . '</span></div></li>'; 
				}
			}
			else
			{
				$chat_field = $chat_field . '<li id="his_em" class="" ><div class="notification-event"><span class="chat-message-item">Messedge history is empty</span></div></li>';
			}
			echo $chat_field ;
		}
		else
		{
			if($all_mess != NULL)
			{
				$all_mess = array_reverse($all_mess);
				foreach ($all_mess as $value) {

					if($value['id_user_from'] == $this->_user['id'])
						$who = $this->_user;
					else
						$who = $user_sob;
					$chat_field = $chat_field . '<li id="' . $value['id_message'] . '" ><div class="author-thumb"><img src="/img' .$who['img'] . '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="' . "/profile/" . $who['id'] . '" class="h6 notification-friend">' . $who['login'] . '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' . $value['date_creation'] . '</time></span><br/><span class="chat-message-item" >' . $value['messadge'] . '</span></div></li>'; 
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
				return "Not friends";
			}
		}
		else if(!empty($data) && $data['roomId'])
		{
			$res = $this->model->getChatRoomById($data['roomId']);
			if(!$res)
				return "notRoom";
			if($res[0]['id_user'] != $this->_user['id'] && $res[0]['id_sob'] != $this->_user['id'])
				return "notFriend";
			$fr = $this->model->getFriend($res[0]['id_user'], $res[0]['id_sob']);
			if(!$fr)
			{
				return "notFriend";
			}
			return($data['roomId']);

		}
		else
			return "notFriend";
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

	private function _calculateUserRating($userId)
	{
		$rating = 0;
		$user = $this->model->getUser($userId);

		if (!empty($user)){
			$numFriends = $this->model->countFriends($userId);
			$numTags = $this->model->countTags($userId);
			$details = $this->model->getUserDetails($userId);
			$openReports = $this->model->countOpenReports($userId);
			$numUnicalVisits = $this->model->countUnicVisitors($userId);

			$rating += $numFriends * 5;
			$rating += $numTags;
			$rating += $numUnicalVisits;
			$rating -= $openReports * 2;

			if (!empty($details['description']))
				$rating += 10;
			if (!empty($details['fb_page']))
				$rating += 3;
			if (!empty($details['twitter_page']))
				$rating += 3;
			if (!empty($user['status']))
				$rating += 3;
			if (!empty($user['img']))
				$rating += 10;

		}
		$res = $this->model->setRating($rating, $userId);
		return $rating;
	}

	private function _calculateDistanse($lat1, $lon1, $lat2, $lon2)
	{
		$earth_rad = 6373.0;

		$lat1 = deg2rad (($lat1));
		$lon1 = deg2rad (($lon1));
		$lat2 = deg2rad (($lat2));
		$lon2 = deg2rad (($lon2));

		$dlon = $lon2 - $lon1;
		$dlat = $lat2 - $lat1;

		$a = sin($dlat / 2) ** 2 + cos($lat1) * cos($lat2) * sin($dlon / 2) ** 2;
		$c = 2 * atan2(sqrt($a), sqrt(1 - $a));

		$distance = $earth_rad * $c;

		//search in some radius
		return intval($distance / 10);
	}

	private function _searchSort($a, $b)
	{
		if ($a['distanse'] < $b['distanse'])
			return (-1);
		if ($a['distanse'] > $b['distanse'])
			return (1);
		if ($a['numSharedTags'] < $b['numSharedTags'])
			return (1);
		if ($a['numSharedTags'] > $b['numSharedTags'])
			return (-1);
		if ($a['rating'] < $b['rating'])
			return (1);
		if ($a['rating'] > $b['rating'])
			return (-1);
		return (0);
	}

	public function _userSuggestions()
	{
		$userTags = $this->model->getTags($this->_user['id']);
		$userDetails = $this->model->getUserDetails($this->_user['id']);
		$options = array();
		$options['exceptId'] = [$this->_user['id']];
		$friends = $this->model->getFriends($this->_user['id']);
		$friends = array_merge($friends, $this->model->getOutputFriendRequests($this->_user['id']));

		if ($friends){
			foreach ($friends as $friend) {
				$id = ($friend['from_request'] == $this->_user['id']) ? $friend['to_request'] : $friend['from_request'];
				if ($friend['from_request'] == $this->_user['id'] || $friend['status'] == 1){
					$options['exceptId'][] = $id;
					
				}
			}
		}	
		if (!empty($userDetails['sexual_preferences']) && $userDetails['sexual_preferences'] != 'bi'){
			$options['gender'] = ($userDetails['sexual_preferences'] == 'male') ? 'man' : 'woman';
		}
		$options['user_gender'] = $this->_user['gender'];
		$users = $this->model->getUserSuggestions($options);

		$tagsArr = array();

		foreach ($userTags as $value) {
				$tagsArr[] = $value['id_tag'];
		}
		foreach ($users as &$user) {
			$user['age'] = DateTime::createFromFormat('Y-m-d', $user['birthDate'])
				->diff(new DateTime('now'))
				->y;
			$user['numSharedTags'] = $this->model->countSharedTags($user['id'], $tagsArr);
			$user['rating'] = $this->_calculateUserRating($user['id']);
			$user['distanse'] = $this->_calculateDistanse(
				$this->ViewData['user']['lat_lng']['lat'], $this->ViewData['user']['lat_lng']['lng'],
				$user['lat'], $user['lng']
			);
		}
		usort($users, array($this, '_searchSort'));

		return $users;
	}
	public function chat($requests, $response, $args)
	{
		$this->ViewData['arg'] = $args;
		$this->ViewData['mydata'] = ['dr' => 1];
		$this->render($response, "chat.twig", "chat");
	}
}
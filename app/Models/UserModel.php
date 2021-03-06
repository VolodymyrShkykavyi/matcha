<?php

namespace App\Models;


class UserModel extends Model
{
	////////// 		SELECT SECTOR 		///////////////////
	public function getUserSuggestions($options = array())
	{
		$params = [];
		$sql = 'SELECT * FROM `users` 
			JOIN user_details ON users.id = user_details.id_user 
			JOIN location ON users.id = location.id_user
			WHERE users.blocked = 0 AND users.active = 1';

		if (!empty($options['gender'])){
			$sql .= " AND `users`.`gender` = '?s'";
			$params[] = $options['gender'];
		}

		if (!empty($options['user_gender'])){
			$sql .= " AND (`user_details`.`sexual_preferences` = 'bi' 
				OR `user_details`.`sexual_preferences` = '?s')";
			$params[] = ($options['user_gender'] == 'man' ? 'male' : 'female');
		}

		if (!empty($options['exceptId'])){
			$sql .= " AND user_details.id_user NOT IN (?ai)";
			$params[] = $options['exceptId'];
		}

		return $this->execute($sql, $params);
	}

	public function CountMutual()
	{
		return(1);
		$res = $this->db->query('SELECT * 
				FROM friends t
				JOIN friends t1 ON (t1.from_request = t.from_request) OR (t1.to_request = t.to_request)
				JOIN friends t2 ON (t2.from_request = t1.from_request) OR (t2.to_request = t1.to_request)
				WHERE (t1.from_request = 15 OR t1.to_request = 15 )AND (t2.from_request = 16 OR t2.to_request = 16)');
		return ($res->fetch_assoc_array());
	}

	public function get20Users()
	{
		$res = $this->db->query('SELECT * FROM users WHERE `active`=1 ORDER BY rating DESC LIMIT 5');
		return ($res->fetch_assoc_array());
	}


	public function LoadSearchUsers($q)
	{
		if($q)
		{
			$res = $this->db->query('SELECT * FROM `users` WHERE (`login` LIKE "%?s%" OR `firstName` LIKE "%?s%" OR `lastName` LIKE "%?s%") AND `active`=1 LIMIT 5', $q, $q, $q);
			return ($res->fetch_assoc_array());
		}
		else
			return(0);
	}

	public function getUser($id)
	{
		if (!is_numeric($id) || $id <= 0) {
			return false;
		}

		$res = $this->execute('SELECT * FROM users WHERE id=?i', [$id]);
	   
		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function getUserByToken($tok)
	{
		$res = $this->db->query('SELECT * FROM `users` WHERE `token` = "?s" ', $tok);

		$res = $res->fetch_assoc_array();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function getUserByLoginAndToken($log, $tok)
	{
		$res = $this->db->query('SELECT * FROM `users` WHERE `token` = "?s" AND `login` = "?s"', $tok, $log);
		$res = $res->fetch_assoc_array();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function getLoginUser($id)
	{
		if (!is_numeric($id) || $id <= 0) {
			return false;
		}

		$res = $this->execute('SELECT `login` FROM users WHERE id=?i', [$id]);
	   
		if (!empty($res))
			return $res[0];
		return $res;
	}


	public function getFriend($userId, $friendId)
	{
		$res = $this->execute('SELECT * FROM `friends` WHERE (`from_request` = ?i AND `to_request` = ?i)
			OR (`from_request` = ?i AND `to_request` = ?i)', [$userId, $friendId, $friendId, $userId]);

		if (!empty($res))
			return $res[0];
		return false;
	}

	public function getFriends($userId)
	{
		$res = $this->execute('SELECT * FROM `friends` WHERE (`from_request` = ?i OR `to_request` = ?i)
			AND `status` = 1', [$userId, $userId]);

		return $res;
	}

	public function getOutputFriendRequests($userId)
	{
		$res = $this->execute('SELECT * FROM `friends` WHERE `from_request` = ?i AND `status` = 0', [$userId]);

		return $res;
	}

	public function getFriendRequests($userId)
	{
		$res = $this->execute('SELECT * FROM `friends` WHERE `to_request` = ?i AND `status` = 0', [$userId]);

		return $res;
	}

	public function getNotifications($userId)
	{
		$res = $this->execute('SELECT * FROM `notifications` WHERE `id_user` = ?i ORDER BY `time` DESC', [$userId]);

		return $res;
	}

	public function countNotifications($userId)
	{
		$res = $this->db->query("SELECT COUNT(*) FROM `notifications` WHERE `id_user` = ?i AND `viewed` = 0", $userId);

		$res = $res->fetch_row();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function countFriends($userId)
	{
		$res = $this->db->query(
			"SELECT COUNT(*) FROM `friends` WHERE `status` = 1 AND (`from_request` = ?i OR `to_request` = ?i)",
			$userId, $userId);

		$res = $res->fetch_row();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function countTags($userId)
	{
		$res = $this->db->query("SELECT COUNT(*) FROM `user_tags` WHERE `id_user` = ?i", $userId);

		$res = $res->fetch_row();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function countOpenReports($userId)
	{
		$res = $this->db->query("SELECT COUNT(*) FROM `user_reports` WHERE `id_user` = ?i AND checked = 0", $userId);

		$res = $res->fetch_row();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function countUnicVisitors($userId)
	{
		$res = $this->db->query("SELECT COUNT(*) FROM `notifications` WHERE `id_user` = ?i AND type = 'view_profile'", $userId);

		$res = $res->fetch_row();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function countSharedTags($targetId, $tagsArr)
	{
		$res = $this->db->query("SELECT COUNT(*) FROM `user_tags` WHERE `id_user` = ?i AND id_tag IN (?ai)", $targetId, $tagsArr);

		$res = $res->fetch_row();

		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function getUserLocation($userId)
	{
		if (!is_numeric($userId) || $userId <= 0) {
			return false;
		}

		$res = $this->db->query('SELECT * FROM `location` WHERE id_user=?i', $userId);
		
		 return $res->fetch_assoc();
	}

	public function getUserDetails($userId)
	{
		$res = $this->db->query('SELECT * FROM `user_details` WHERE id_user=?i', $userId);

		return $res->fetch_assoc();
	}

	public function getUserByLogin($login)
	{
		if (empty($login)) {
			return false;
		}

		$res = $this->execute('SELECT * FROM users WHERE login="?s"', [$login]);

		if (!empty($res))
			return $res[0];
		return $res;
	 }

	public function getUserByEmail($email)
	{
		if (empty($email)) {
			return false;
		}

		$res = $this->execute('SELECT * FROM users WHERE email="?s"', [$email]);
		if (!empty($res))
			return $res[0];
		return $res;
	}

	public function getChatRooms($id)
	{
		if (!is_numeric($id) || $id <= 0) {
			return false;
		}
		try{
			  $res = $this->execute('SELECT * FROM chats WHERE id_sob=?i OR id_user=?i', [$id, $id]);
		}catch (\dbException $e){
				return $e;
			}
		if (!empty($res))
			return $res;
		return $res;
	}

	public function getChatRoomById($id)
	{
		if (!is_numeric($id) || $id <= 0) {
			return false;
		}
		try{
			  $res = $this->execute('SELECT * FROM chats WHERE id=?i', [$id]);
		}catch (\dbException $e){
				return $e;
			}
		if (!empty($res))
			return $res;
		return $res;
	}

	public function getTags($userId)
	{
		$res = $this->db->query("SELECT * FROM `user_tags` JOIN tags ON id_tag = id WHERE id_user = ?i", $userId);

		return $res->fetch_assoc_array();
	}


	public function auth($login, $password)
	{
		$res = $this->execute('SELECT * FROM `users` WHERE `login` = "?s" AND `password` = "?s"',
			[$login, $this->_getHashPassword($password)]);

		 if (!empty($res))
			return $res[0];
		return $res;
	}
	
	public function getLastMessage($id_from, $id_chat_room)
	{
		$res = $this->execute('SELECT `messadge` FROM `messages` WHERE `id_chat_room` = ?i AND `id_user_from` = ?i ORDER BY `date_creation` DESC  LIMIT 1 ', [$id_chat_room, $id_from]);
		return($res);
	}

	public function getUnreadMessage($id_from, $id_room, $status)
	{
		try{
			$res = $this->execute('SELECT `id_message` FROM `messages` WHERE `id_chat_room` = ?i AND `id_user_from` = ?i AND `read_status` = ?i', [$id_room, $id_from, $status]);
			}catch (\dbException $e){
				return $e;
			}
		return($res);
	}

	public function getAllUnreadMessage($id_to)
	{
		$res = $this->db->query('SELECT COUNT(`id_message`) FROM `messages` WHERE `id_user_to` = "?s" AND `read_status` = ?s', $id_to, 0);
		return ($res->fetch_assoc_array()[0]["COUNT(`id_message`)"]);
	}

	public function getUnreadMessage1($id_to, $id_room, $status)
	{
		
		$res = $this->db->query('SELECT COUNT(`id_message`) FROM `messages` WHERE `id_chat_room` = ?s AND `id_user_to` = "?s" AND `read_status` = ?s', $id_room, $id_to, $status);
		return ($res->fetch_assoc_array()[0]["COUNT(`id_message`)"]);
	}

	public function getMessage($id_chat_room, $start)
	{
		if (!is_numeric($id_chat_room) || $id_chat_room <= 0) {
			return false;
		}
		$res = $this->execute('SELECT * FROM `messages`  WHERE `id_chat_room` = ?i ORDER BY `date_creation` DESC LIMIT 20 OFFSET ?i', [$id_chat_room , $start]);
		return($res);
	}
	
	public function getAllReports()
	{
		$res = $this->db->query("SELECT COUNT(id) AS num, id_user, checked FROM `user_reports` WHERE checked = 0
			GROUP BY id_user");

		return $res->fetch_assoc_array();
	}

	public function getPhotos($userId)
	{
		$res = $this->db->query("SELECT * FROM photos WHERE id_user = ?i", $userId);

		return $res->fetch_assoc_array();
	}



	////////////////		INSRT SECTOR 		/////////////////
	public function addUser($data)
	{
		if (empty($data) || empty($data['login']) || empty($data['password']) ||
			empty($data['email']) || empty($data['fname']) || empty($data['lname']) ||
			empty($data['gender']) || empty($data['birthday'])|| empty($data['token'])) {
			return false;
		}
		$data['login'] = htmlspecialchars($data['login']);
		$data['fname'] = htmlspecialchars($data['fname']);
		$data['lname'] = htmlspecialchars($data['lname']);
		$data['token'] = htmlspecialchars($data['token']);
		$data['password'] = $this->_getHashPassword($data['password']);

		//check if user exists
		if (!empty($this->getUserByEmail($data['email'])) || !empty($this->getUserByLogin($data['login']))) {
			return false;
		}

		$res = $this->db->query('INSERT INTO `users` 
			(`login`, `password`, `email`, `firstName`, `lastName`, `gender`, `birthDate`, `token`)
			VALUES ("?s", "?s", "?s", "?s", "?s", "?s", "?s", "?s")', 
			$data['login'], $data['password'], $data['email'], $data['fname'],
			$data['lname'], $data['gender'], $data['birthday'], $data['token']);

		if ($res){
			return $this->db->getLastInsertId();
		}

		return false;
	}

	public function addFriend($fromId, $toId)
	{
		if (empty($this->getUser($toId))){
			return false;
		}
		$res = $this->execute('SELECT * FROM `friends` WHERE (`from_request` = ?i AND `to_request` = ?i)
			OR (`from_request` = ?i AND `to_request` = ?i)', [$fromId, $toId, $toId, $fromId]);

		if(empty($res)){
			if ($this->db->query('INSERT INTO `friends` (`from_request`, `to_request`)
				VALUES (?i, ?i)', $fromId, $toId)){

				return true;
			}
		}
		return false;
	}

	public function addChatRoom($fromId, $toId)
	{
		if (empty($this->getUser($fromId))){
			return false;
		}
		if (empty($this->getUser($toId))){
			return false;
		}
		try{
			$this->db->query('INSERT INTO `chats` (`id_user`, `id_sob`)
			VALUES (?i, ?i)', $fromId, $toId);
			return true;
			}catch (\dbException $e){
				return "errorochka".$e;
			}
	}

	public function addNotificationViewProfile($userId, $targetId)
	{
		$res = $this->db->query("INSERT INTO `notifications` (`id_user_from`, `id_user`, `type`)
			VALUES (?i, ?i, 'view_profile') ON DUPLICATE KEY UPDATE `time` = CURRENT_TIMESTAMP, `viewed` = 0 ", $userId, $targetId);

		return $res;
	}

	public function addNotificationAcceptFriendRequest($userId, $targetId)
	{
		$res = $this->db->query("INSERT INTO `notifications` (`id_user_from`, `id_user`, `type`)
			VALUES (?i, ?i, 'accept_friend_request') ON DUPLICATE KEY UPDATE `time` = CURRENT_TIMESTAMP, `viewed` = 0 ", $userId, $targetId);

		return $res;
	}

	public function addNotificationRemoveFriend($userId, $targetId)
	{
		$res = $this->db->query("INSERT INTO `notifications` (`id_user_from`, `id_user`, `type`)
			VALUES (?i, ?i, 'remove_from_friend') ON DUPLICATE KEY UPDATE `time` = CURRENT_TIMESTAMP, `viewed` = 0 ", $userId, $targetId);

		return $res;
	}

	///////////// 		UPDATE SECTOR 		////////////////

	public function updateToken($user_id, $token)
	{
		if (empty($token) || !is_numeric($user_id)){
			return false;
		}
		$res = $this->db->query('UPDATE users SET `token` = "?s" WHERE `id` = ?i', $token, $user_id);
		return $res;
	}

	public function setAllMessRead($room_id, $user_id)
	{
		if (empty($room_id) || !is_numeric($room_id) || !is_numeric($user_id) || !is_numeric($user_id)){
			return false;
		}

		$res = $this->db->query('UPDATE messages SET `read_status` = ?i WHERE id_chat_room=?i AND id_user_to=?i', 1, $room_id, $user_id);

		return $res;
	}

	public function setAllMessRead1($sob_id, $user_id)
	{
		if (empty($sob_id) || !is_numeric($sob_id) || !is_numeric($user_id) || !is_numeric($user_id)){
			return false;
		}
		$res = $this->db->query('UPDATE messages SET `read_status` = ?i WHERE (id_user_from=?i AND id_user_to=?i) OR (id_user_to=?i AND id_user_from=?i)', 1, $sob_id, $user_id ,$user_id, $sob_id );
		return $res;
	}

	public function updateUserActive($id, $status)
	{
		if (empty($id) || !is_numeric($id) || !is_bool($status)){
			return false;
		}

		$res = $this->db->query('UPDATE users SET `active` = ?i WHERE id=?i', $status, $id);

		return $res;
	}

	public function updateUserPersonalInfo($userId, $data)
	{
		$data['login'] = htmlentities($data['login']);
		$data['firstName'] = htmlentities($data['firstName']);
		$data['lastName'] = htmlentities($data['lastName']);
		$data['status'] = htmlentities($data['status']);
		$data['description'] = htmlentities($data['description']);
		$data['fb_page'] = htmlentities($data['fb_page']);
		$data['twitter_page'] = htmlentities($data['twitter_page']);

		$res = $this->db->query("UPDATE users SET login='?s', email='?s', firstName='?s', lastName='?s',
 			gender='?s', birthDate='?s', status='?s' WHERE id = ?i",
			$data['login'], $data['email'], $data['firstName'], $data['lastName'], $data['gender'], $data['birthday'],
			$data['status'], $userId);

		if (!$res)
			return false;

		//update location
		$res = $this->updateLocation($userId, $data['lat'], $data['lng'], $data['addr']);
		if (!$res)
			return false;

		//update user details
		$res = $this->db->query("INSERT INTO `user_details` (id_user, description, fb_page, twitter_page, sexual_preferences)
			VALUES (?i, '?s', '?s', '?s', '?s')  
			ON DUPLICATE KEY UPDATE description = '?s', fb_page = '?s', twitter_page = '?s', sexual_preferences = '?s'",
			$userId, $data['description'], $data['fb_page'], $data['twitter_page'], $data['sexual_preferenses'],
			$data['description'], $data['fb_page'], $data['twitter_page'], $data['sexual_preferenses']
			);

		return $res;
	}

	public function updateLocation($userId, $lat, $lng, $addr)
	{
		if (!is_numeric($lat) || !is_numeric($lng) || !is_numeric($userId)){
			return false;
		}
		if (!empty($this->getUserLocation($userId))){
			$sql = 'UPDATE `location` SET `lat` = "?s", `lng` = "?s"';
			if (!empty($addr)){
				$sql .= ', `address` = "?s"';
			}
			$sql .= ' WHERE id_user=?i';
			if (!empty($addr)){
				$res = $this->db->query($sql, $lat, $lng, $addr, $userId);
			} else {
				$res = $this->db->query($sql, $lat, $lng, $userId);
			}
		} else {
			$res = $this->db->query('INSERT INTO `location` (`lat`, `lng`, `address`, `id_user`) VALUES ("?s","?s","?s",?i)',
				$lat, $lng, $addr, $userId);
		}

		return $res;
	}

	public function updateStatus($userId, $text)
	{
		$text = htmlentities($text);
		
		$res = $this->db->query('UPDATE users SET `status` = "?s" WHERE id = ?i', $text, $userId);

		return $res;
	}

	public function resetPassword($userId, $psw)
	{
			$res = $this->db->query('UPDATE users SET password = "?s" WHERE id = ?i', 
				$this->_getHashPassword($psw), $userId);
			return $res;
	}


	public function updatePassword($userId, $current, $psw)
	{
		$res = $this->execute('SELECT * FROM `users` WHERE `id` = ?i AND `password` = "?s"',
			[$userId, $this->_getHashPassword($current)]);

		if (!empty($res)){
			$res = $this->db->query('UPDATE users SET password = "?s" WHERE id = ?i', 
				$this->_getHashPassword($psw), $userId);
			return $res;
		}
		return false;
	}

	public function updateNotificationsViewed($userId)
	{
		$res = $this->db->query("UPDATE `notifications` SET `viewed` = 1 WHERE `id_user` = ?i", $userId);

		return $res;
	}


	public function acceptFriend($userId, $friendId)
	{
		if (!is_numeric($userId) || !is_numeric($friendId)){
			return false;
		}
		$res = $this->db->query('UPDATE `friends` SET `status` = 1 WHERE `from_request` = ?i AND `to_request` = ?i',
			$friendId, $userId);

		return $res;
	}

	public function setRating($rating ,$userId)
	{
		if (!is_numeric($userId) || !is_numeric($rating)) {
			return false;
		}
		$res = $this->db->query('UPDATE `users` SET `rating` = ?i WHERE `id` = ?i', $rating, $userId);
		return $res;
	}




	////////////////////		DELETE SECTOR (DANGEROUS SECTOR) ////////////////////
	
	public function removeFriend($userId, $friendId)
	{
		if (!is_numeric($userId) || !is_numeric($friendId)){
			return false;
		}
		$res = $this->db->query('DELETE FROM `friends` WHERE (`from_request` = ?i AND `to_request` = ?i)
			OR (`from_request` = ?i AND `to_request` = ?i)', $userId, $friendId, $friendId, $userId);
		
		return $res;
	}




	///////////////////////       PRIVATE SECTOR 	///////////////////////////
	private function _getHashPassword($password)
	{
		return hash('whirlpool', $password);
	}
}
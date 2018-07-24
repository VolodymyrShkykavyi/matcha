<?php

namespace App\Models;

use PDO;

class UserModel extends Model
{

/////////////////////////////
	public function getUsers()
	{
		return $this->execute('SELECT * FROM `users`');
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

	public function getFriendRequests($userId)
	{
		$res = $this->execute('SELECT * FROM `friends` WHERE `to_request` = ?i AND `status` = 0', [$userId]);

		return $res;
	}

	public function getNotifications($userId)
	{
		$res = $this->execute('SELECT * FROM `notifications` WHERE `id_user` = ?i', [$userId]);

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

	public function getUserLocation($userId)
	{
		if (!is_numeric($userId) || $userId <= 0) {
			return false;
		}

		$res = $this->db->query('SELECT * FROM `location` WHERE id_user=?i', $userId);
		
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



	public function auth($login, $password)
	{
		$res = $this->execute('SELECT * FROM `users` WHERE `login` = "?s" AND `password` = "?s"',
			[$login, $this->_getHashPassword($password)]);

		 if (!empty($res))
			return $res[0];
		return $res;
	}




/////////////////////////////////
	public function addUser($data)
	{
		if (empty($data) || empty($data['login']) || empty($data['password']) ||
			empty($data['email']) || empty($data['fname']) || empty($data['lname']) ||
			empty($data['gender']) || empty($data['birthday'])) {
			return false;
		}
		$data['login'] = htmlspecialchars($data['login']);
		$data['fname'] = htmlspecialchars($data['fname']);
		$data['lname'] = htmlspecialchars($data['lname']);
		$data['password'] = $this->_getHashPassword($data['password']);

		//check if user exists
		if (!empty($this->getUserByEmail($data['email'])) || !empty($this->getUserByLogin($data['login']))) {
			return false;
		}

		$res = $this->db->query('INSERT INTO `users` 
			(`login`, `password`, `email`, `firstName`, `lastName`, `gender`, `birthDate`)
			VALUES ("?s", "?s", "?s", "?s", "?s", "?s", "?s")', 
			$data['login'], $data['password'], $data['email'], $data['fname'],
			$data['lname'], $data['gender'], $data['birthday']);

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


	/////////////////////////////

	public function updateUserActive($id, $status)
	{
		if (empty($id) || !is_numeric($id) || !is_bool($status)){
			return false;
		}

		$res = $this->db->query('UPDATE users SET `active` = ?i WHERE id=?i', $status, $id);

		return $res;
	}

	public function updateLocation($userId, $lat, $lng)
	{
		if (!is_numeric($lat) || !is_numeric($lng) || !is_numeric($userId)){
			return false;
		}
		if (!empty($this->getUserLocation($userId))){
			$res = $this->db->query('UPDATE `location` SET `lat` = "?s", `lng` = "?s" WHERE id_user=?i',
				$lat, $lng, $userId);
		} else {
			$res = $this->db->query('INSERT INTO `location` (`lat`, `lng`, `id_user`) VALUES ("?s","?s",?i)',
				$lat, $lng, $userId);
		}

		return $res;
	}

	public function updateStatus($userId, $text)
	{
		$res = $this->db->query('UPDATE users SET `status` = "?s" WHERE id = ?i', $text, $userId);

		return $res;
	}

	 public function getLastMessage($id_from, $id_chat_room)
	{
		$res = $this->execute('SELECT `messadge` FROM `messages` WHERE `id_chat_room` = ?i AND `id_user_from` = ?i ORDER BY `date_creation` DESC  LIMIT 1 ', [$id_chat_room, $id_from]);
		return($res);
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

	public function removeFriend($userId, $friendId)
	{
		if (!is_numeric($userId) || !is_numeric($friendId)){
			return false;
		}
		$res = $this->db->query('DELETE FROM `friends` WHERE (`from_request` = ?i AND `to_request` = ?i)
			OR (`from_request` = ?i AND `to_request` = ?i)', $userId, $friendId, $friendId, $userId);
		
		return $res;
	}

	private function _getHashPassword($password)
	{
		return hash('whirlpool', $password);
	}
}
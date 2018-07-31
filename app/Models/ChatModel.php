<?php

namespace App\Models;

include __DIR__ . "/../../vendor/autoload.php";
use Krugozor\Database\Mysql\Mysql as Mysql;

class ChatModel{

	protected $db;

	public function __construct()
	{
		$settings = include_once __DIR__ . "/../../config/slim.settings.php";
		$conf = $settings['settings']['db'];
		try{
			$this->db = Mysql::create($conf['host'], $conf['user'], $conf['pass'], $conf['port'], $conf['socket']);
		$this->db->setDatabaseName($conf['dbname']);
		} catch (\Exception $ex){
			echo "Can't connect to DataBase " . $ex->getMessage();
			die();
		}
	}


		///////////////////////////////// 			INSERT SECTOR  		 ////////////////////

	public function addMessadge($id_chat_room, $id_user_from, $id_user_to, $messadge){
		if (empty($id_chat_room) || !is_numeric($id_chat_room) || empty($id_user_from) || !is_numeric($id_user_from) ||empty($id_user_to) || !is_numeric($id_user_to) || empty($messadge) ){
			return false;
		}
		$res = $this->db->query('INSERT INTO messages (`id_chat_room`, `id_user_from`, `id_user_to` , `messadge`) VALUES ("?s" , "?s" , "?s", "?s")', $id_chat_room, $id_user_from, $id_user_to, $messadge);
		return $res;
	}

	///////////////////////////////// 			SELECT SECTOR 		 ////////////////////
	public function getChatRoomById($id)
	{
		if (!is_numeric($id) || $id <= 0) {
			return false;
		}
		try{
			  $res = $this->db->query('SELECT * FROM chats WHERE id=?i', $id);
		}catch (\dbException $e){
				return $e;
			}
			if($res)
			{
				$data = $res->fetch_assoc();
			}
			else
				return(0);
		return $data;
	}

	public function getUser($id)
	{
		if (!is_numeric($id) || $id <= 0) {
			return false;
		}
		try{
		$res = $this->db->query('SELECT * FROM users WHERE id=?i', $id);
	   }catch (\dbException $e){
				return $e;
			}
		if($res)
			{
				$data = $res->fetch_assoc();
			}
			else
				return(0);
		return $data;
	}

	public function getLastMessage($id_from, $id_chat_room)
	{
		try{
		$res = $this->db->query('SELECT `messadge`, `date_creation` FROM `messages` WHERE `id_chat_room` = ?i AND `id_user_from` = ?i ORDER BY `date_creation` DESC  LIMIT 1 ', $id_chat_room, $id_from);
		 }catch (\dbException $e){
				return $e;
			}
		if($res)
			{
				$data = $res->fetch_assoc();
			}
			else
				return(0);
		return $data;
	}

	public function getUnreadMessage($id_from, $id_room, $status)
	{
		try{
			$res = $this->db->query('SELECT `id_message` FROM `messages` WHERE `id_chat_room` = ?i AND `id_user_from` = ?i AND `read_status` = ?i', $id_room, $id_from, $status);
			}catch (\dbException $e){
				return $e;
			}
		if($res)
			{
				$data = $res->fetch_assoc();
			}
			else
				return(0);
		return $data;
	}
	
	////////////////// 						UPDATE SECTOR 				/////////////////////
	public function updateUserIsOnline($id, $status){
		if (empty($id) || !is_numeric($id) || !is_bool($status)){
			return false;
		}
		$res = $this->db->query('UPDATE users SET `IsOnline` = ?i WHERE id=?i', $status, $id);
		return $res;
	}

}
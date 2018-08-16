<?php
namespace App\Controllers;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;


class Client
{
	private $_id = 0;
	private $_conn = NULL;
	private $_IsActive = 0;

	public function __construct($id, $conn){
		$this->_id = $id;
		$this->_conn = $conn;
		$this->_IsActive = 1;
	}

	public function setIsActive($isActive){
		$this->_IsActive = $isActive;
	}
	public function getIsActive(){
		return $this->_IsActive;
	}
	public function getId(){
		return $this->_id;
	}
	public function getConn(){
		return $this->_conn;
	}
}

class Chat extends Controller implements MessageComponentInterface {
	protected $clients;
	protected $db;

	public function __construct(){
		$this->clients = new \SplObjectStorage;
		$this->loadModel("chat");
	}
	
	public function onOpen(ConnectionInterface $conn) {
		$querystring = $conn->httpRequest->getUri()->getQuery();
		parse_str($querystring,$queryarray);
		$client = new Client($queryarray["id"], $conn);
		$this->model->updateUserIsOnline($client->getId(), true);
		$this->clients->attach($client);
		echo "New connection! ({$conn->resourceId})\n";
		// foreach ($this->clients as $client) {
		// 			echo "Client " . $client->getConn()->resourceId . " is " . $client->getIsActive();
		// 			echo "\n";
		// 		}
			
	}

	public function onMessage(ConnectionInterface $from, $msg)
	{
		$data = json_decode($msg);
		
		if($data->type == "ident")
		{
			foreach ($this->clients as $client) {
				if ($from->resourceId == $client->getConn()->resourceId){
					$data->conn_id = $client->getConn()->resourceId;
					$client->getConn()->send(json_encode($data));
					break;
				}
			}
		}
		if($data->type == "c_Active")
		{
			foreach ($this->clients as $client) {
				if ($data->conn_id == $client->getConn()->resourceId){
					$client->setIsActive($data->is_active);
					break;
				}
			}

			// foreach ($this->clients as $client) {
			// 		echo "Client " . $client->getConn()->resourceId . " is " . $client->getIsActive();
			// 		echo "\n";
			// }
			// echo "\n";echo "\n";echo "\n";

		}
		if($data->type == "private_mess")
		{
			$chat_room = $this->model->getChatRoomById($data->id_room);
			if($chat_room['id'])
			{
				foreach ($this->clients as $client) {
					if($from->resourceId == $client->getConn()->resourceId)
					{
						$from_id = $client->getId();
						break;
					}
				}
				$user_from = $this->model->getUser($from_id);
				$data->img = $user_from['img'];
				$data->login = $user_from['login'];
				if($chat_room['id_user'] == $from_id)
				{
					$id_to = $chat_room['id_sob'];
				}
				else
				{
					$id_to = $chat_room['id_user'];
				}
				$res = $this->model->addMessadge($chat_room['id'], $from_id, $id_to, $data->msg);
				$last_mess = $this->model->getLastMessage($from_id, $chat_room['id']);
				$data->date_creation = $last_mess['date_creation'];
				$i = 0;
				$send = 0;
				$last_client = NULL;
				foreach ($this->clients as $client) {
					$c_user_id = $client->getId();
					if($c_user_id == $from_id)
					{
						$data->type = "mess_send";
						$client->getConn()->send(json_encode($data));
					}
					if($c_user_id == $id_to)
					{
						$last_client = $client;
						if($client->getIsActive() == 1)
						{
							$data->type = "mess_res";
							$data->is_active = $client->getIsActive();
							$AllUnreadMessage = $this->model->getAllUnreadMessage($id_to);
							$unread_mess = $this->model->getUnreadMessage($from_id, $chat_room['id'], 0);
							$data->all_unread = $AllUnreadMessage;
							$data->count_unread = count($unread_mess);
							$client->getConn()->send(json_encode($data));
							$send = 1;
						}
					}
					$i++;
				}
				if($send == 0 && $last_client)
				{
					$data->type = "mess_res";
					$data->is_active = $last_client->getIsActive();
					$AllUnreadMessage = $this->model->getAllUnreadMessage($id_to);
					$unread_mess = $this->model->getUnreadMessage($from_id, $chat_room['id'], 0);
					$data->all_unread = $AllUnreadMessage;
					$data->count_unread = count($unread_mess);
					$last_client->getConn()->send(json_encode($data));
				}

			}
		}

		if($data->type == "addFriend" || $data->type == "removeRequest")
		{
			$coutn_req = $this->model->getFriendRequest($data->friend_id);
			$data->req = count($coutn_req);
			$send = 0;
			$last_client = NULL;
			foreach ($this->clients as $client) {
					$c_user_id = $client->getId();
					if($c_user_id == $data->friend_id)
					{
						$last_client = $client;
						if($client->getIsActive() == 1)
						{
							$data->is_active = $client->getIsActive();
							$client->getConn()->send(json_encode($data));
							$send = 1;
						}
					}
				}
				if($send == 0 && $last_client)
				{
					$data->is_active = $last_client->getIsActive();
					$last_client->getConn()->send(json_encode($data));
				}
		}

		if($data->type == "ViewProfileEvent" || $data->type == "friend_del" || $data->type == "acceptRequest")
		{
			$countNotif = $this->model->countNotifications($data->target_id);
			$data->countNotif = $countNotif;
			$last_client = NULL;
			foreach ($this->clients as $client) {
					$c_user_id = $client->getId();
					if($c_user_id == $data->target_id)
					{
						$last_client = $client;
						if($client->getIsActive() == 1)
						{
							$last_client->getConn()->send(json_encode($data));
							return;
						}
					}
				}
			if($last_client)
				$last_client->getConn()->send(json_encode($data));
		}
	}
	public function onClose(ConnectionInterface $conn)
	{
		// The connection is closed, remove it, as we can no longer send it messages
		$clientConnNum = 0;
		$clientId = 0;
		foreach ($this->clients as $client) {
			if ($client->getConn() === $conn){
				$clientId = $client->getId();
				echo "Connection {$conn->resourceId} has disconnected\n";
				$this->clients->detach($client);
			}
		}
		foreach ($this->clients as $client) {
			if ($client->getId() == $clientId){
				$clientConnNum++;
			}
		}
		if (!$clientConnNum){
			$this->model->updateUserIsOnline($clientId, false);
		}
	}

	public function onError(ConnectionInterface $conn, \Exception $e) {
		echo "An error has occurred: {$e->getMessage()}\n";

		$conn->close();
	}
}

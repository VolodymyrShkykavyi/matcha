<?php
namespace App\Controllers;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;


class Client
{
	private $_id = 0;
	private $_conn = NULL;

	public function __construct($id, $conn){
		$this->_id = $id;
		$this->_conn = $conn;
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
		// Store the new connection to send messages to later
		$querystring = $conn->httpRequest->getUri()->getQuery();
		parse_str($querystring,$queryarray);
		$client = new Client($queryarray["id"], $conn);
		$this->model->updateUserIsOnline($client->getId(), true);
		$this->clients->attach($client);
		echo "New connection! ({$conn->resourceId})\n";
	}

	public function onMessage(ConnectionInterface $from, $msg)
	{
		$data = json_decode($msg);

		var_dump($data->msg);
			$numRecv = count($this->clients) - 1;
			echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
				, $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');
			foreach ($this->clients as $client) {
				$data->trget_id = $client->getId();
				$client->getConn()->send(json_encode($data));
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

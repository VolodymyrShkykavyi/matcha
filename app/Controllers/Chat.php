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

	public function __construct(){
		$this->clients = new \SplObjectStorage;
	}
	public function onOpen(ConnectionInterface $conn) {
		// Store the new connection to send messages to later
		$querystring = $conn->httpRequest->getUri()->getQuery();
		parse_str($querystring,$queryarray);
		$client = new Client($queryarray["id"], $conn);
		$this->model->updateIsOnline($this->$queryarray["id"], true);
		$this->clients->attach($client);
		echo "New connection! ({$conn->resourceId})\n";
	}

	public function onMessage(ConnectionInterface $from, $msg)
	{
		$numRecv = count($this->clients) - 1;
		echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
			, $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');


		foreach ($this->clients as $client) {
				$client->getConn()->send($msg . "target id = {$client->getId()}");
		}
	}

	public function onClose(ConnectionInterface $conn)
	{
		// The connection is closed, remove it, as we can no longer send it messages
		foreach ($this->clients as &$client) {
			if ($client->getConn() === $conn){
				$this->model->updateIsOnline($this->clients->getId(), false);
				echo "Connection {$conn->resourceId} has disconnected\n";
				$this->clients->detach($client);
			}
		}
	}

	public function onError(ConnectionInterface $conn, \Exception $e) {
		echo "An error has occurred: {$e->getMessage()}\n";

		$conn->close();
	}
}

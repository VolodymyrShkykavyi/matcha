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
			$host =	"mysql:dbname=camagru;localhost";
			// $host = "mysql:dbname=db_matcha;".$conf['host'];
			var_dump($host);
			$this->db = new \PDO($host, $conf['user'], $conf['pass']);
			// Mysql::create($conf['host'], $conf['user'], $conf['pass'])
    				// ->setCharset("utf8");
			// $this->db->setDatabaseName($conf['dbname']);
		} catch (\Exception $ex){
			echo "Can't connect to DataBase " . $ex->getMessage();
			die();
		}
	}
}
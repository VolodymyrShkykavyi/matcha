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
			$this->db = Mysql::create($conf['host'], $conf['user'], $conf['pass'], 3306, "/Users/vibondar/MAMP/mysql/tmp/mysql.sock");
		$this->db->setDatabaseName($conf['dbname']);
		} catch (\Exception $ex){
			echo "Can't connect to DataBase " . $ex->getMessage();
			die();
		}
	}

	public function updateUserIsOnline($id, $status){
		if (empty($id) || !is_numeric($id) || !is_bool($status)){
			return false;
		}
		$res = $this->db->query('UPDATE users SET `IsOnline` = ?i WHERE id=?i', $status, $id);
		return $res;
	}
}
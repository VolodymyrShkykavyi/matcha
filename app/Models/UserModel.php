<?php

namespace App\Models;

use PDO;

class UserModel extends Model
{

	public function getUsers()
	{
		return $this->db->query('SELECT * FROM `users`')->fetchAll(PDO::FETCH_ASSOC);
	}

	public function auth($login, $password)
	{
		//TODO: hash psw
		$stmt = $this->db->prepare('SELECT * FROM `users` WHERE `login` = ? AND `password` = ?');
		$stmt->execute([$login, $password]);

		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
}
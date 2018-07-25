<?php


namespace App\Models;

class ApiModel extends Model
{

	public function checkEmail($userId, $email)
	{
		$res = $this->db->query("SELECT * FROM `users` WHERE email='?s' AND NOT id = ?i", $email, $userId);

		return empty($res->fetch_assoc());
	}

	public function checkLogin($userId, $email)
	{
		$res = $this->db->query("SELECT * FROM `users` WHERE login='?s' AND NOT id = ?i", $email, $userId);

		return empty($res->fetch_assoc());
	}

}
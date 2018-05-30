<?php

namespace App\Models;

use PDO;

class UserModel extends Model
{

	public function getUsers()
	{
		return $this->db->query('SELECT * FROM `users`')->fetchAll(PDO::FETCH_ASSOC);
	}

}
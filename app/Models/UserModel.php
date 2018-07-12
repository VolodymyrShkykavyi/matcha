<?php

namespace App\Models;

use PDO;

class UserModel extends Model
{

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
       
        return $res[0];
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
        return $res;    }

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

	public function auth($login, $password)
	{
		$res = $this->execute('SELECT * FROM `users` WHERE `login` = "?s" AND `password` = "?s"',
		    [$login, $this->_getHashPassword($password)]);

		 if (!empty($res))
            return $res[0];
        return $res;
	}

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

	private function _getHashPassword($password)
    {
        return hash('whirlpool', $password);
    }
}
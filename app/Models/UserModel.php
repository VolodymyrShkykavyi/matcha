<?php

namespace App\Models;

use PDO;

class UserModel extends Model
{

	public function getUsers()
	{
		return $this->db->query('SELECT * FROM `users`')->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getUser($id)
    {
        if (!is_numeric($id) || $id <= 0) {
            return false;
        }

        $stmt = $this->db->prepare('SELECT * FROM users WHERE id=?');
        $stmt->execute([$id]);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserLocation($userId)
    {
        if (!is_numeric($userId) || $userId <= 0) {
            return false;
        }

        $stmt = $this->db->prepare('SELECT * FROM `location` WHERE id_user=?');
        $stmt->execute([$userId]);

         return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByLogin($login)
    {
        if (empty($login)) {
            return false;
        }

        $stmt = $this->db->prepare('SELECT * FROM users WHERE login=?');
        $stmt->execute([$login]);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByEmail($email)
    {
        if (empty($email)) {
            return false;
        }

        $stmt = $this->db->prepare('SELECT * FROM users WHERE email=?');
        $stmt->execute([$email]);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

	public function auth($login, $password)
	{
		$stmt = $this->db->prepare('SELECT * FROM `users` WHERE `login` = ? AND `password` = ?');
		$stmt->execute([$login, $this->_getHashPassword($password)]);

		return $stmt->fetch(PDO::FETCH_ASSOC);
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

        $stmt = $this->db->prepare('INSERT INTO `users` 
        (`login`, `password`, `email`, `firstName`, `lastName`, `gender`, `birthDate`)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ');

        //if wrong values - catch PDO exception
        try {
            if ($stmt->execute([$data['login'], $data['password'], $data['email'], $data['fname'],
                $data['lname'], $data['gender'], $data['birthday']])) {
                $id =  $this->db->lastInsertId();

                //$this->db->query('INSER INTO `settings`');
                return $id;
            }
        } catch (\PDOException $ex) {}
        return false;
    }

    public function updateUserActive($id, $status)
    {
        if (empty($id) || !is_numeric($id) || !is_bool($status)){
            return false;
        }

        $stmt = $this->db->prepare('UPDATE users SET `active` = ? WHERE id=?');

        return $stmt->execute([$status, $id]);
    }

    public function updateLocation($userId, $lat, $lng)
    {
        if (!is_numeric($lat) || !is_numeric($lng) || !is_numeric($userId)){
            return false;
        }
        if (!empty($this->getUserLocation($userId))){
            $stmt = $this->db->prepare('UPDATE `location` SET `lat` = ?, `lng` = ? WHERE id_user=?');

            return $stmt->execute([$lat, $lng, $userId]);
        } else {
            $stmt = $this->db->prepare('INSERT INTO `location` (`lat`, `lng`, `id_user`) VALUES (?,?,?)');
             return $stmt->execute([$lat, $lng, $userId]);
        }  
    }

    public function updateStatus($userId, $text)
	{
//		$text = htmlspecialchars($text);
		$stmt = $this->db->prepare('UPDATE users SET `status` = ? WHERE id = ?');

		return $stmt->execute([$text, $userId]);
	}

	private function _getHashPassword($password)
    {
        return hash('whirlpool', $password);
    }
}
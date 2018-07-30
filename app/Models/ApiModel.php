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

	public function addTag($userId, $tag)
	{
		$res = $this->db->query("SELECT * FROM tags WHERE tag = '?s'", $tag)->fetch_assoc();
		$tagId = 0;

		if (!empty($res)){
			$tagId = $res['id'];
		} else {
			$res = $this->db->query("INSERT INTO tags (`tag`) VALUES ('?s')", $tag);

			$tagId = $this->db->getLastInsertId();
		}

		if (!$tagId)
			return false;

		//add tag to user
		$res = $this->db->query("SELECT * FROM user_tags WHERE id_user = ?i AND id_tag = ?i", $userId, $tagId)->fetch_assoc();
		if (empty($res)){
			$this->db->query("INSERT INTO user_tags (`id_user`, `id_tag`) VALUES (?i, ?i)", $userId, $tagId);
		} else {
			return false;
		}

		return $tagId;
	}

	public function deleteTag($userId, $tagId)
    {
        $res = $this->db->query("DELETE FROM user_tags WHERE id_user = ?i AND id_tag = ?i", $userId, $tagId);

        return !empty($res);
    }

}
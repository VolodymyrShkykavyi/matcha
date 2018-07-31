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

	public function getUserPhotoNum($userId)
	{
		$num = 0;
		$res = $this->db->query("SELECT COUNT(*) AS num FROM `photos` WHERE id_user = ?i", $userId)->fetch_assoc();

		if (!empty($res)){
			$num = $res['num'];
		}
		return $num; 
	}

	public function addPhoto($userId, $filename)
	{
		$res =  $this->db->query("INSERT INTO photos (id_user, src) VALUES (?i, '?s')", $userId, $filename);

		if ($res){
			return  $this->db->getLastInsertId();
		}

		return false;
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

	public function blockUser($userId, $targetId, $isAdmin, $block = 0)
	{
		$res = false;

		if (!$isAdmin){
			$res = $this->db->query("INSERT INTO user_reports (`id_user`, `id_user_from`, `checked`) VALUES (?i, ?i, 0)
				ON DUPLICATE KEY UPDATE checked = 0", $targetId, $userId);
		} else {
			$this->db->query("UPDATE user_reports SET checked = 1 WHERE id_user = ?i", $targetId);

			$res = $this->db->query("UPDATE users SET blocked = ?i WHERE id = ?i", $block, $targetId);
		}

		return $res;
	}

	public function deleteTag($userId, $tagId)
    {
        $res = $this->db->query("DELETE FROM user_tags WHERE id_user = ?i AND id_tag = ?i", $userId, $tagId);

        return !empty($res);
    }

    public function deletePhoto($userId, $imageId)
    {
    	$res = $this->db->query("DELETE FROM photos WHERE id_user = ?i AND id = ?i", $userId, $imageId);

    	return $res;
    }
}
<?php

namespace App\Middleware;

use PDO;

class UpdateLastUserAction
{
	private $db;

	public function __construct(PDO $db)
	{
		$this->db = $db;
	}

	public function __invoke()
	{
		if (isset($_SESSION['auth']) && isset($_SESSION['auth']['id'])) {
			$sql = 'UPDATE users SET lastAction = CURRENT_TIMESTAMP WHERE id = :id;';
			$stmt = $this->db->prepare($sql);
			$stmt->execute(['id' => $_SESSION['auth']['id']]);
		}
	}

}
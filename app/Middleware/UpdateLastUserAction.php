<?php

namespace App\Middleware;

use PDO;
use Slim\Http\Response;
use Slim\Http\Request;

class UpdateLastUserAction
{
	private $db;

	public function __construct(PDO $db)
	{
		$this->db = $db;
	}

	public function __invoke(Request $request, Response $response, callable $next)
	{
		if (isset($_SESSION['auth']) && isset($_SESSION['auth']['id'])) {
			$sql = 'UPDATE users SET lastAction = CURRENT_TIMESTAMP WHERE id = :id;';
			$stmt = $this->db->prepare($sql);
			$stmt->execute(['id' => $_SESSION['auth']['id']]);
		}

        return $next($request, $response);
	}

}
<?php

namespace App\Models;

use Krugozor\Database\Mysql\Mysql as Mysql;
use Interop\Container\ContainerInterface;

abstract class Model
{
	protected $db;

	public function __construct(ContainerInterface $c)
	{
		$this->db = $c['db'];
		try{
			$this->db->setDatabaseName($c['settings']['db']['dbname']);
		} catch (\Exception $ex){
			header("Location: \install");
			die();
		}
	}

	public function execute($sql, $params = array())
	{
		$result = $this->db->queryArguments($sql, $params);
		return $result->fetch_assoc_array();
	}
}
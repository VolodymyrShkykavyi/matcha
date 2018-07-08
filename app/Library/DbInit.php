<?php

namespace App\Library;

use PDO;
use Interop\Container\ContainerInterface;

class DbInit
{
	protected $dbSettings;
	protected $pdo;

	public function __construct(ContainerInterface $container)
	{
		$this->dbSettings = $container['settings']['db'];
		$this->pdo = new PDO('mysql:host=' . $this->dbSettings['host'],
			$this->dbSettings['user'], $this->dbSettings['pass']);
		$this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}

	public function __invoke()
	{
		$this->createDb();
		$this->createTables();
	}

	protected function createDb()
	{
		try {
			$this->pdo->query('CREATE DATABASE IF NOT EXISTS `' . $this->dbSettings['dbname'] . '` 
			DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;;');
		} catch (\PDOException $e){
			die("Can't create database : " . $e->getMessage());
		}
		$this->pdo->query('USE ' . $this->dbSettings['dbname']);
	}

	protected function createTables()
	{
		$sql = 'CREATE TABLE IF NOT EXISTS `users` (
				`id` int(11) NOT NULL AUTO_INCREMENT,
				`login` varchar(30) NOT NULL,
				`password` text NOT NULL,
				`email` varchar(255) NOT NULL,
				`firstName` varchar(50) NOT NULL,
				`lastName` varchar(50) NOT NULL,
				`gender` enum('man','woman') NOT NULL,
				`birthDate` date NOT NULL,
				`registerDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
				`lastAction` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
				`active` tinyint(1) NOT NULL DEFAULT '0',
				PRIMARY KEY (`id`)
			) ENGINE=MyISAM DEFAULT CHARSET=utf8;';
		//TODO: fields: isOnline, verified, sexuality, fame(rating), blocked(isActive), location
		$this->pdo->query($sql);
	}
}
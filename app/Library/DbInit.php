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
			`id` INT NOT NULL AUTO_INCREMENT,
			`login` VARCHAR(30) NOT NULL,
			`password` TEXT NOT NULL,
			`email` VARCHAR(255) NOT NULL,
			`firstName` VARCHAR(50) NOT NULL,
			`lastName` VARCHAR(50) NOT NULL,
			`gender` ENUM(\'man\', \'woman\') NOT NULL,
			`birthDate` DATE NOT NULL,
			`registerDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (id)
		);';
		//TODO: fields: isOnline, verified, sexuality, fame(rating), blocked(isActive), location
		$this->pdo->query($sql);
	}
}
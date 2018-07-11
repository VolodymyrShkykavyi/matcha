<?php

namespace App\Library;

use Krugozor\Database\Mysql\Mysql as Mysql;
use Interop\Container\ContainerInterface;

class DbInit
{
	protected $dbSettings;
	protected $db;

	public function __construct(ContainerInterface $container)
	{
		$this->dbSettings = $container['settings']['db'];
		$this->db = $container['db'];
	}

	public function __invoke()
	{
		$this->createDb();
		$this->createTables();
		echo "Database installed!";
	}

	protected function createDb()
	{
		try {
			$this->db->query('CREATE DATABASE IF NOT EXISTS `' . $this->dbSettings['dbname'] . '` 
			DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;');
		} catch (\dbException $e){
			die("Can't create database : " . $e->getMessage());
		}
		$this->db->query('USE ' . $this->dbSettings['dbname']);
	}

	protected function createTables()
	{
		$sql = "CREATE TABLE IF NOT EXISTS `users` (
				  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
				  `login` varchar(30) NOT NULL,
				  `password` text NOT NULL,
				  `email` varchar(255) NOT NULL,
				  `status` varchar(50) DEFAULT NULL,
				  `firstName` varchar(50) NOT NULL,
				  `lastName` varchar(50) NOT NULL,
				  `gender` enum('man','woman') NOT NULL,
				  `birthDate` date NOT NULL,
				  `registerDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
				  `lastAction` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
				  `active` tinyint(1) NOT NULL DEFAULT '0',
				  PRIMARY KEY (`id`)
			) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;";
		//TODO: fields: isOnline, verified, sexuality, fame(rating), blocked(isActive), location
		$this->db->query($sql);

		$sql = "CREATE TABLE IF NOT EXISTS `settings` (
				  `id` int(10) UNSIGNED NOT NULL,
				  `notification_sound` tinyint(1) NOT NULL DEFAULT '1',
				  `notification_email` tinyint(1) NOT NULL DEFAULT '1',
				  `messege_sound` tinyint(1) NOT NULL DEFAULT '1',
				  `id_user` int(10) UNSIGNED NOT NULL,
				  KEY `id_user` (`id_user`)
				) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		$sql = "CREATE TABLE IF NOT EXISTS `location` (
				  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
				  `lat` varchar(25) NOT NULL,
				  `lng` varchar(25) NOT NULL,
				  `id_user` int(10) UNSIGNED NOT NULL,
				  PRIMARY KEY (`id`),
				  KEY `fk_location_id_user` (`id_user`)
				) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;";
		$this->db->query($sql);
	}
}
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
		$this->createUsers();
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
				  `IsOnline` tinyint(1) NOT NULL DEFAULT '0',
				  `img` varchar(255) DEFAULT '/author-main1.jpg',
				  `active` tinyint(1) NOT NULL DEFAULT '0',
				  PRIMARY KEY (`id`)
			) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;";
			//TODO: fields: !isOnline!, verified, sexuality, fame(rating), blocked(isActive), location
			try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `users` : " . $e->getMessage());
			}

		$sql = "CREATE TABLE IF NOT EXISTS `messages` (
				 `id_message` INTEGER PRIMARY KEY AUTO_INCREMENT,
       			 `id_chat_room` INTEGER NOT NULL,
       			 `id_user_from` INTEGER NOT NULL,
       			 `id_user_to` INTEGER NOT NULL,
				 `messadge` TEXT NOT NULL,
				 `date_creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
				 FOREIGN KEY (id_user_from) REFERENCES users(id) ON DELETE CASCADE,
				 FOREIGN KEY (id_user_to) REFERENCES users(id) ON DELETE CASCADE,
				 FOREIGN KEY (id_chat_room) REFERENCES chats(id) ON DELETE CASCADE)
			) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;";
			try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `messages` : " . $e->getMessage());
			}


		$sql = "CREATE TABLE IF NOT EXISTS `settings` (
				  `id` int(10) UNSIGNED NOT NULL,
				  `notification_sound` tinyint(1) NOT NULL DEFAULT '1',
				  `notification_email` tinyint(1) NOT NULL DEFAULT '1',
				  `messege_sound` tinyint(1) NOT NULL DEFAULT '1',
				  `id_user` int(10) UNSIGNED NOT NULL,
				  KEY `id_user` (`id_user`)
				) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `settings` : " . $e->getMessage());
			}

		$sql = "CREATE TABLE IF NOT EXISTS `location` (
				  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
				  `lat` varchar(25) NOT NULL,
				  `lng` varchar(25) NOT NULL,
				  `id_user` int(10) UNSIGNED NOT NULL,
				  PRIMARY KEY (`id`),
				  KEY `fk_location_id_user` (`id_user`)
				) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;";
		try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `location` : " . $e->getMessage());
			}

		$sql = "CREATE TABLE IF NOT EXISTS `chats` (
				 `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
				 `id_user` int(10) UNSIGNED NOT NULL,
				 `id_sob` int(10) UNSIGNED NOT NULL,
				  PRIMARY KEY (`id`),
				  KEY `fk_location_id_user` (`id_user`)
				) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;";
		try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `chats` : " . $e->getMessage());
			}

		$sql = "CREATE TABLE IF NOT EXISTS `friends` (
				`id` int(10) UNSIGNED NOT NULL,
  				`from_request` int(10) UNSIGNED NOT NULL,
 				`to_request` int(10) UNSIGNED NOT NULL,
  				`status` tinyint(1) NOT NULL DEFAULT '0',
  				`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
				) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;";
		try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `friends` : " . $e->getMessage());
			}
	}

	protected function createUsers()
	{
		$sql = "INSERT INTO `users` (`id`, `login`, `password`, `email`, `status`, `firstName`, `lastName`, `gender`, `birthDate`, `registerDate`, `lastAction`, `active`, `img`, `IsOnline`) VALUES
(1, 'admin', '6a4e012bd9583858a5a6fa15f58bd86a25af266d3a4344f1ec2018b778f29ba83be86eb45e6dc204e11276f4a99eff4e2144fbe15e756c2c88e999649aae7d94', '123123@qwe', '123', '123', 'qwe', 'man', '2018-06-21', '2018-07-11 17:35:02', '2018-07-11 17:35:02', 1, '/author-main1.jpg', 0)";
		try {
				$this->db->query($sql);
			} catch (\dbException $e){
				die("Can't create table `friends` : " . $e->getMessage());
			}
	}
}




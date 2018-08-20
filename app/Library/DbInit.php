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
		try {
			$this->createTables();
		} catch (\Exception $e){
			die("Can't create table: " . $e->getMessage());
		}
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
		$sql = "CREATE TABLE `chats` (
				  `id` int(10) UNSIGNED NOT NULL,
				  `id_user` int(10) UNSIGNED NOT NULL,
				  `id_sob` int(10) UNSIGNED NOT NULL
			) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
			
			$this->db->query($sql);
			
		$sql = "CREATE TABLE `friends` (
				  `id` int(10) UNSIGNED NOT NULL,
				  `from_request` int(10) UNSIGNED NOT NULL,
				  `to_request` int(10) UNSIGNED NOT NULL,
				  `status` tinyint(1) NOT NULL DEFAULT '0',
				  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
			) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		$this->db->query($sql);



		$sql = "CREATE TABLE `location` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `lat` varchar(25) NOT NULL,
		  `lng` varchar(25) NOT NULL,
		  `address` text,
		  `id_user` int(10) UNSIGNED NOT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		$this->db->query($sql);


		$sql = "CREATE TABLE `messages` (
		  `id_message` int(10) UNSIGNED NOT NULL,
		  `id_chat_room` int(10) UNSIGNED NOT NULL,
		  `id_user_from` int(10) UNSIGNED NOT NULL,
		  `id_user_to` int(10) UNSIGNED NOT NULL,
		  `messadge` text NOT NULL,
		  `date_creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
		  `read_status` tinyint(1) NOT NULL DEFAULT '0'
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		$this->db->query($sql);
		

		$sql = "CREATE TABLE `notifications` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `id_user_from` int(10) UNSIGNED NOT NULL,
		  `id_user` int(10) UNSIGNED NOT NULL,
		  `type` enum('view_profile','accept_friend_request','remove_from_friend','') NOT NULL,
		  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  `viewed` tinyint(1) NOT NULL DEFAULT '0'
		) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
		$this->db->query($sql);
			

		$sql = "CREATE TABLE `photos` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `id_user` int(10) UNSIGNED NOT NULL,
		  `src` varchar(255) NOT NULL
		) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		$sql = "CREATE TABLE `settings` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `notification_sound` tinyint(1) NOT NULL DEFAULT '1',
		  `notification_email` tinyint(1) NOT NULL DEFAULT '1',
		  `messege_sound` tinyint(1) NOT NULL DEFAULT '1',
		  `id_user` int(10) UNSIGNED NOT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		$sql = "CREATE TABLE `tags` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `tag` varchar(255) NOT NULL
		) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		$sql = "CREATE TABLE `users` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `login` varchar(30) NOT NULL,
		  `admin` tinyint(1) NOT NULL DEFAULT '0',
		  `blocked` tinyint(1) NOT NULL DEFAULT '0',
		  `password` text NOT NULL,
		  `email` varchar(255) NOT NULL,
		  `status` varchar(70) DEFAULT NULL,
		  `firstName` varchar(50) NOT NULL,
		  `lastName` varchar(50) NOT NULL,
		  `gender` enum('man','woman') NOT NULL,
		  `birthDate` date NOT NULL,
		  `registerDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
		  `lastAction` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
		  `active` tinyint(1) NOT NULL DEFAULT '0',
		  `img` varchar(255) DEFAULT '/author-main1.jpg',
		  `IsOnline` tinyint(1) NOT NULL DEFAULT '0',
		  `rating` int(11) NOT NULL DEFAULT '0',
		  `token` varchar(10000) DEFAULT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		$sql = "CREATE TABLE `user_details` (
		  `id_user` int(10) UNSIGNED NOT NULL,
		  `description` text,
		  `fb_page` text NOT NULL,
		  `twitter_page` text NOT NULL,
		  `sexual_preferences` enum('male','female','bi','') NOT NULL DEFAULT 'bi'
		) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		$sql = "CREATE TABLE `user_reports` (
		  `id` int(10) UNSIGNED NOT NULL,
		  `id_user` int(10) UNSIGNED NOT NULL,
		  `id_user_from` int(10) UNSIGNED NOT NULL,
		  `checked` tinyint(1) NOT NULL DEFAULT '0'
		) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
		$this->db->query($sql);


		$sql = "CREATE TABLE `user_tags` (
		  `id_user` int(10) UNSIGNED NOT NULL,
		  `id_tag` int(10) UNSIGNED NOT NULL
		) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
		$this->db->query($sql);

		//index


		$sql = "ALTER TABLE `chats`
		  ADD PRIMARY KEY (`id`),
		  ADD KEY `fk_location_id_user` (`id_user`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `friends`
  			ADD PRIMARY KEY (`id`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `location`
		  ADD PRIMARY KEY (`id`),
		  ADD KEY `fk_location_id_user` (`id_user`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `messages`
		  ADD PRIMARY KEY (`id_message`),
		  ADD KEY `id_user_from` (`id_user_from`),
		  ADD KEY `id_user_to` (`id_user_to`),
		  ADD KEY `id_chat_room` (`id_chat_room`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `notifications`
		  ADD PRIMARY KEY (`id`),
		  ADD UNIQUE KEY `id_user_from` (`id_user_from`,`id_user`,`type`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `photos`
  			ADD PRIMARY KEY (`id`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `settings`
  			ADD KEY `id_user` (`id_user`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `tags`
		  ADD PRIMARY KEY (`id`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `users`
		  ADD PRIMARY KEY (`id`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `user_details`
		  ADD PRIMARY KEY (`id_user`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `user_reports`
		  ADD PRIMARY KEY (`id`),
		  ADD UNIQUE KEY `id_user` (`id_user`,`id_user_from`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `user_tags`
		  ADD UNIQUE KEY `id_user` (`id_user`,`id_tag`);";
		$this->db->query($sql);

		$sql = "ALTER TABLE `chats`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;";
		$this->db->query($sql);

		$sql = "ALTER TABLE `friends`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `location`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `messages`
		  MODIFY `id_message` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `notifications`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `photos`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `tags`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `users`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `user_reports`
		  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT";
		$this->db->query($sql);

		$sql = "ALTER TABLE `messages`
		  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`id_user_from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
		  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`id_user_to`) REFERENCES `users` (`id`) ON DELETE CASCADE,
		  ADD CONSTRAINT `messages_ibfk_3` FOREIGN KEY (`id_chat_room`) REFERENCES `chats` (`id`) ON DELETE CASCADE;";
		$this->db->query($sql);
	}


	protected function createUsers()
	{
		//TODO: users
	}
}




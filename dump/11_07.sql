-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 11 2018 г., 11:07
-- Версия сервера: 5.7.21
-- Версия PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- База данных: `db_matcha`
--

-- --------------------------------------------------------

--
-- Структура таблицы `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `lat` varchar(25) NOT NULL,
  `lng` varchar(25) NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_location_id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `location`
--

INSERT INTO `location` (`id`, `lat`, `lng`, `id_user`) VALUES
(6, '50.447', '30.511', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `settings`
--

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `notification_sound` tinyint(1) NOT NULL DEFAULT '1',
  `notification_email` tinyint(1) NOT NULL DEFAULT '1',
  `messege_sound` tinyint(1) NOT NULL DEFAULT '1',
  `id_user` int(10) UNSIGNED NOT NULL,
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `email`, `status`, `firstName`, `lastName`, `gender`, `birthDate`, `registerDate`, `lastAction`, `active`) VALUES
(1, 'adm', 'easdasf', 'main@sd', NULL, 'fir', 'las', 'man', '2018-05-01', '2018-05-27 20:48:12', '2018-07-08 20:37:05', 1),
(2, 'adm2', 'dsf2222', 'maiddn@sd', NULL, 'fir', 'las', 'man', '2018-05-01', '2018-05-27 20:48:12', '2018-07-08 20:37:05', 0),
(4, 'root', '899b76161701a4111b36cbadd0d168e896f1e97d22b4f470331293b9d9bce5fd6a338b64bfd640b8d78ef3a465047886527e1c250d587ca7693f46d27ae8721a', 'volodya03.08.1994@gmail.com', 'new dfgdfgdfg', '234', '24', 'man', '2018-05-27', '2018-07-08 20:43:12', '2018-07-11 11:05:55', 1);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `fk_location_id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `settings`
--
ALTER TABLE `settings`
  ADD CONSTRAINT `settings_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

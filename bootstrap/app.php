<?php
require_once __DIR__ . "/../vendor/autoload.php";

use Krugozor\Database\Mysql\Mysql as Mysql;

$settings = include_once __DIR__ . "/../config/slim.settings.php";
$app = new \Slim\App($settings);

// Get container
$container = $app->getContainer();

// Register database on container
$container['db'] = function ($container){
	$conf = $container['settings']['db'];
	$db = Mysql::create($conf['host'], $conf['user'], $conf['pass'])
    		->setCharset("utf8");
	return $db;
};



// Register Twig view on container
$container['view'] = function ($container) {
	$view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
		'cache' => false,
		'debug' => true
	]);

	// Instantiate and add Slim specific extension
	$basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
	$view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));
	$view->addExtension(new Twig_Extension_Debug());

	return $view;
};

// Register flash messages on container
$container['flash'] = function (){
	return new \Slim\Flash\Messages();
};

// Register logger 'Monolog' on container
$container['logger'] = function() {
	$logger = new \Monolog\Logger('matcha_logger');
	$file_handler = new \Monolog\Handler\StreamHandler(__DIR__ . "/../logs/app.log");
	$logger->pushHandler($file_handler);
	return $logger;
};

require_once __DIR__ . '/../routes/web.php';

require_once __DIR__ . '/../routes/api.php';

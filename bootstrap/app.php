<?php
require_once __DIR__ . "/../vendor/autoload.php";

$settings = include_once __DIR__ . "/../config/slim.settings.php";
$app = new \Slim\App($settings);

// Get container
$container = $app->getContainer();


// Register database on container
$container['db'] = function ($container){
	$db = $container['settings']['db'];
	try{
		$pdo = new PDO('mysql:host=' . $db['host'] . ';dbname=' . $db['dbname'],
			$db['user'], $db['pass']);
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	} catch (\Exception $ex){
	header("Location: /install");
	echo $ex->getMessage();;
	die();
}
	return $pdo;
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

<?php


namespace App\Controllers;

use Interop\Container\ContainerInterface;

class ApiController extends Controller
{
	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);

	}

	public function checkEmail($request, $response, $args)
	{
		$data = $request->getParsedBody();
		if (!empty($data['email'])) {
			$id = $_SESSION['auth']['id'];
			if (empty($id))
				$id = 0;
			return json_encode($this->model->checkEmail($id, $data['email']));
		}

		return json_encode(false);
	}
}
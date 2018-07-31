<?php


namespace App\Controllers;

use Interop\Container\ContainerInterface;
use Slim\Http\UploadedFile;

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

	public function checkLogin($request, $response, $args)
	{
		$data = $request->getParsedBody();
		if (!empty($data['login'])) {
			$id = $_SESSION['auth']['id'];
			if (empty($id))
				$id = 0;
			return json_encode($this->model->checkLogin($id, $data['login']));
		}

		return json_encode(false);
	}

	public function blockUser($request, $response, $args)
	{
		$data = $request->getParsedBody();
		$res = false;

		//target id
		if (!empty($data['id'])){
			$this->loadModel('user');
			$user = $this->model->getUser($_SESSION['auth']['id']);
			$block = 0;

			if (!empty($user)){
				if ($user['admin'] && !empty($data['block']) && $data['block']){
					$block = 1;
				}
				$this->loadModel('api');

				if ($this->model->blockUser($user['id'], $data['id'], $user['admin'], $block)){
					$res = true;
				}
			}
		}

		return json_encode($res);
	}

	public function addTag($request, $response, $args)
	{
		$res = false;
		$data = $request->getParsedBody();

		if (!empty($data['tag'])) {
			$data['tag'] = trim($data['tag']);
			$pos = strrpos($data['tag'], '#');
			if (!$pos){
				$data['tag'] = trim($data['tag'], '#');

				if (strlen($data['tag']) >= 3 && strlen($data['tag']) <= 20){	
					$res = $this->model->addTag($_SESSION['auth']['id'], $data['tag']);
					if (!$res){
						return json_encode(['error' => 'Tag already exists']);
					}
				}
			}
		}

		return json_encode($res);
	}

	public function deleteTag($request, $response, $args)
    {
        $res = false;
        $data = $request->getParsedBody();

        if (!empty($data['id'])){
            if (is_numeric($data['id']) && $data['id'] > 0) {
                if ($this->model->deleteTag($_SESSION['auth']['id'], $data['id']))
                    $res = true;
            }
        }

        return json_encode($res);
    }

	public function uploadPhoto($request, $response, $args)
	{
		$directory = __DIR__ . '/../../public/img';
    	$uploadedFiles = $request->getUploadedFiles();
    	$res = false;
    	
    	$photoNum = $this->model->getUserPhotoNum($_SESSION['auth']['id']);
    	if (!empty($uploadedFiles) && $photoNum < 5){
	    	// handle single input with single file upload
		    $uploadedFile = $uploadedFiles['image'];

		    if ($uploadedFile && $uploadedFile->getError() === UPLOAD_ERR_OK) {
		       $filename = $this->_moveUploadedFile($directory, $uploadedFile);
		     	$id = $this->model->addPhoto($_SESSION['auth']['id'], $filename);
		     	if ($id){
		     		$res = [
		     			'src' => '/img/' . $filename,
		     			'id' => $id
		     		];
		     	}

		    }
		} else {
			$res = ['error' => 'Max photo per user 5. Please delete some fotos before upload.'];
		}

		return json_encode($res);
	}

	public function deletePhoto($request, $response, $args)
	{
		$res = false;

		$data = $request->getParsedBody();
		if (!empty($data['id'])){
			$this->loadModel('user');
			$user = $this->model->getUser($_SESSION['auth']['id']);
			$this->loadModel('api');
			$photo = $this->model->getUserPhoto($_SESSION['auth']['id'], $data['id']);
			
			if (!empty($user) && !empty($photo)){
				if ($user['img'] == '/'.$photo['src']){
					$this->model->deleteUserAvatar($_SESSION['auth']['id']);
				}
				if ($this->model->deletePhoto($_SESSION['auth']['id'], $data['id'])){
					unlink(__DIR__ . '/../../public/img/' . $photo['src']);
					$res = true;
				}
			}
		}

		return json_encode($res);
	}

	public function changeAvatar($request, $response, $args)
	{
		$res = false;
		$data = $request->getParsedBody();

		if (!empty($data['id'])){
			$this->loadModel('user');
			$user = $this->model->getUser($_SESSION['auth']['id']);
			if (!empty($user)){
				$this->loadModel('api');

				$photo = $this->model->getUserPhoto($user['id'], $data['id']);
				if (!empty($photo)){
					$src = '/' . $photo['src'];
					if ($this->model->updateUserAvatar($user['id'], $src)){
						$res = true;
					}
				}
			}
		}

		return json_encode($res);
	}

	/**
	 * Moves the uploaded file to the upload directory and assigns it a unique name
	 * to avoid overwriting an existing uploaded file.
	 *
	 * @param string $directory directory to which the file is moved
	 * @param UploadedFile $uploaded file uploaded file to move
	 * @return string filename of moved file
	 */
	private function _moveUploadedFile($directory, UploadedFile $uploadedFile)
	{
	    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
	   
	    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
	    $filename = sprintf('%s.%0.8s', $basename, $extension);

	    $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);

	    return $filename;
	}
}
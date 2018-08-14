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

		$this->_updateRating($_SESSION['auth']['id']);
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
		$this->_updateRating($_SESSION['auth']['id']);

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
		$this->_updateRating($_SESSION['auth']['id']);

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

			$this->_updateRating($data['id']);
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

	public function searchFilter($request, $response, $args)
	{
		$data = $request->getParsedBody();

		if (empty($data))
			$data = [];
		if (isset($data['age_min'])){
			$date = new \DateTime();
			$date->modify("-{$data['age_min']} year");
			$data['age_min'] = $date->format('Y-m-d');
		}
		if (isset($data['age_max'])){
			$data['age_max'] += 1;
			$date = new \DateTime();
			$date->modify("-{$data['age_max']} year");
			$data['age_max'] = $date->format('Y-m-d');
		}
		if (!empty($data['location'])){
			$data['location'] = preg_replace('/\s\s+/', ' ', trim($data['location']));
			$res = explode(',', $data['location']);
			
			$data['location'] = $res;
		}

		$res = $this->model->getUsersFiltered($data, 0, 0);
		
		$this->loadModel('user');
		foreach ($res as $key => &$user) {
			$user['age'] = \DateTime::createFromFormat('Y-m-d', $user['birthDate'])
				->diff(new \DateTime('now'))
				->y;
			$userLoc = $this->model->getUserLocation($_SESSION['auth']['id']);
			if (!empty($userLoc)){
				$user['distanse'] = $this->_calculateDistanse(
					$userLoc['lat'], $userLoc['lng'],
					$user['lat'], $user['lng']
				);
			} else {
				$user['distanse'] = 0;
			}
			if (!empty($data['tags'])){	
				$user_tags = $this->model->getTags($user['id']);
				$user['shared_tags'] = [];
				$user['num_shared_tags'] = 0;

				foreach ($user_tags as $tag) {
					if (in_array($tag['tag'], $data['tags'])){
						$user['num_shared_tags']++;
						$user['shared_tags'][] = $tag['tag'];
					}
				}

				if ($user['num_shared_tags'] == 0)
					unset($res[$key]);
			}
		}

		//sorting
		if ($data['sort'] == 'age'){
			usort($res, array($this, '_searchSortAge'));
		} elseif($data['sort'] == 'rating'){
			usort($res, array($this, '_searchSortRating'));
		} elseif ($data['sort'] == 'tags') {
			usort($res, array($this, '_searchSortTags'));
		} elseif ($data['sort'] == 'location') {
			usort($res, array($this, '_searchSortDistanse'));
		}

		return json_encode($res);
	}


	private function _searchSortTags($a, $b)
	{
		if ($a['num_shared_tags'] < $b['num_shared_tags'])
			return (1);
		if ($a['num_shared_tags'] > $b['num_shared_tags'])
			return (-1);

		return (0);
	}

	private function _searchSortDistanse($a, $b)
	{
		if ($a['distanse'] < $b['distanse'])
			return (-1);
		if ($a['distanse'] > $b['distanse'])
			return (1);

		return (0);
	}

	private function _searchSortRating($a, $b)
	{
		if ($a['rating'] < $b['rating'])
			return (1);
		if ($a['rating'] > $b['rating'])
			return (-1);
		return (0);
	}

	private function _searchSortAge($a, $b)
	{
		if ($a['age'] < $b['age'])
			return (-1);
		if ($a['age'] > $b['age'])
			return (1);
		return (0);
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

	private function _updateRating($userId)
	{
		$rating = 0;

		$this->loadModel('user');

		$user = $this->model->getUser($userId);

		if (!empty($user)){
			$numFriends = $this->model->countFriends($userId);
			$numTags = $this->model->countTags($userId);
			$details = $this->model->getUserDetails($userId);
			$openReports = $this->model->countOpenReports($userId);
			$numUnicalVisits = $this->model->countUnicVisitors($userId);

			$rating += $numFriends * 5;
			$rating += $numTags;
			$rating += $numUnicalVisits;
			$rating -= $openReports * 2;

			if (!empty($details['description']))
				$rating += 10;
			if (!empty($details['fb_page']))
				$rating += 3;
			if (!empty($details['twitter_page']))
				$rating += 3;
			if (!empty($user['status']))
				$rating += 3;
			if (!empty($user['img']))
				$rating += 10;

		}
		$res = $this->model->setRating($rating, $userId);
		$this->loadModel('api');

		return $rating;
	}

	private function _calculateDistanse($lat1, $lon1, $lat2, $lon2)
	{
		$earth_rad = 6373.0;

		$lat1 = deg2rad (($lat1));
		$lon1 = deg2rad (($lon1));
		$lat2 = deg2rad (($lat2));
		$lon2 = deg2rad (($lon2));

		$dlon = $lon2 - $lon1;
		$dlat = $lat2 - $lat1;

		$a = sin($dlat / 2) ** 2 + cos($lat1) * cos($lat2) * sin($dlon / 2) ** 2;
		$c = 2 * atan2(sqrt($a), sqrt(1 - $a));

		$distance = $earth_rad * $c;

		//search in some radius
		return intval($distance / 5);
	}
}
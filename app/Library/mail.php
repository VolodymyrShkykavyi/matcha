<?php

namespace App\Library;

class Mail
{
	public static function sendMail($email, $subject, $message)
	{
		if (empty($email) || empty($subject) || empty($message)){
			return;
		}
		$encoding = "utf-8";
		// Set preferences for Subject field
		$subject_preferences = array(
			"input-charset" => $encoding,
			"output-charset" => $encoding,
			"line-length" => 76,
			"line-break-chars" => "\r\n"
		);
		$config['from_name'] =  'Matcha team';
		$config['from_email'] =  'Matcha@lolkek.com';
		// Set mail header
		$header = "Content-type: text/html; charset=".$encoding." \r\n";
		$header .= "From: " . $config['from_name'] . " <" . $config['from_email'] ."> \r\n";
		$header .= "MIME-Version: 1.0 \r\n";
		$header .= "Content-Transfer-Encoding: 8bit \r\n";
		$header .= "Date: ".date("r (T)")." \r\n";
		$header .= iconv_mime_encode("Subject", $subject, $subject_preferences);
		// Send mail
		$ret = mail($email, $subject, $message, $header);
		return($ret);
	}
}

?>
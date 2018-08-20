<?php

	$string = file_get_contents("/Users/vibondar/Documents/projects/Matcha/bd/russian_surnames.json");
	$vowels = array("]");
	$string = str_replace($vowels, "", $string);
	$vowels = array("[");
	$string = str_replace($vowels, "", $string);
	echo $string;
	$json_a = json_decode($string, true);
	var_dump($json_a);
	switch (json_last_error()) {
        case JSON_ERROR_NONE:
            echo ' - Ошибок нет';
        break;
        case JSON_ERROR_DEPTH:
            echo ' - Достигнута максимальная глубина стека';
        break;
        case JSON_ERROR_STATE_MISMATCH:
            echo ' - Некорректные разряды или несоответствие режимов';
        break;
        case JSON_ERROR_CTRL_CHAR:
            echo ' - Некорректный управляющий символ';
        break;
        case JSON_ERROR_SYNTAX:
            echo ' - Синтаксическая ошибка, некорректный JSON';
        break;
        case JSON_ERROR_UTF8:
            echo ' - Некорректные символы UTF-8, возможно неверно закодирован';
        break;
        default:
            echo ' - Неизвестная ошибка';
        break;
    }

    echo PHP_EOL;
?>
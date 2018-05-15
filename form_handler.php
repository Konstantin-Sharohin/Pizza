<?php

if (isset($_POST["client_name"]) && isset($_POST["client_number"]) && isset($_POST["client_location"]) &&
	isset($_POST["small"]) && isset($_POST["medium"]) && isset($_POST["big"]) {

	//Массив для JSON ответа
    $result = [
    	"client_name" => $_POST["client_name"],
    	"client_number" => $_POST["client_number"],
		"client_location" => $_POST["client_location"],
		"small" => $_POST["small"],
		"medium" => $_POST["medium"],
		"big" => $_POST["big"]
    ];

    echo json_encode($result); 
}

?>
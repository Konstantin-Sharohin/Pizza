<?php

if (isset($_POST["client_name"]) && isset($_POST["client_number"]) && isset($_POST["client_location"])) { 

	//Массив для JSON ответа
    $result = [
    	"client_name" => $_POST["client_name"],
    	"client_number" => $_POST["client_number"]
		"client_location" => $_POST["client_location"]
    ]; 

    echo json_encode($result); 
}

?>
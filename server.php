<?php
$data = file_get_contents('./data.json');
header('Content-Type: application/json');
echo json_encode($data, JSON_PRETTY_PRINT);
/*
// leggo file
$data = file_get_contents('./server/data.json');
// converto il testo json in un array php
$list = json_decode($data, true);
var_dump($list);
//modifivo i dati
unset($list[1]);
$list = json_encode($list);
file_put_contents('./server/data.json', $list);
*/
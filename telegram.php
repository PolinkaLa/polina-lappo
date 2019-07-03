<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$project = $_POST['project']
$token = "863499719:AAFSJt4x8EFFjM-Y1aCPJ_di0JfaFUFjKTo";
$chat_id = "-323480272";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Проект' => $project
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Success";
} else {
  echo "Error";
}
?>
<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$project = $_POST['project'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true; 
$mail->Username = '*********************';
$mail->Password = '*********************'; 
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;

$mail->setFrom('*********************');
$mail->addAddress('*********************');
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта Polina Lappo';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br>Описание проекта: ' .$project;
$mail->AltBody = '';

if(!$mail->send()) {
    header ('location: error.html');
} else {
    header('location: success.html');
}
?>
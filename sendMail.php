<?php



$email=$_POST['email'];
$name=$_POST['name'];
$text=$_POST['text'];

$to="geometry83@yandex.ru";
$subject="Вопрос с сайта ФОРСАЖ";
$message=
"Имя: ".htmlspecialchars($name)."<br>
Email: ".htmlspecialchars($email)."<br>
Вопрос: ".htmlspecialchars($text);

$headers = "From: форсаж.ua <site-email@site.ua>\r\nContent-type: text/html;";

mail ($to, $subject, $message, $headers);



header('Location: http://f0540772.xsph.ru/new/index.html');

exit;



?>

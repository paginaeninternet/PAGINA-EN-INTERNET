<?php
$destinatario = 'bsmonterroso@gmail.com';
//variable dedl correo al que va a llegar el mensaje

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$negocio = $_POST['negocio'];
$mensaje = $_POST['mensaje'];

$header = "enviado desde paginaeninternet.com";
$mensajecompleto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $correo, $mensajecompleto, $header );
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"contacto.html='index.html'\",1000)</script>";
?>
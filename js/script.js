/*
* OS/Soft- PHP State Management Script
* Version 1.0.0
*/

 
function register()
{
var doc_id = $("#doc_id").val();
var nroaf = $("#nroaf").val();
var email = $("#email").val();
var celular = $("#celular").val();
var password = $("#password").val();
var confirm_password = $("#confirm_password").val();

if(doc_id == "")
{
alert("Documento de Identidad es requerido!");
}
else if(nroaf == "")
{
alert("Numero de Afiliado es requerido!");
}
else if(email == "")
{
alert("Email es requerido!");
}
else if(password == "")
{
alert("Password  es requerido!");
}
else if(confirm_password == "")
{
alert("Confirmar Password es requerido!");
}
else if(confirm_password != password)
{
alert("Confirmacion de password invalida!");
}
else
{

$.post("register_user.php", {
doc_id: doc_id,
nroaf: nroaf,
email: email,
celular: celular,
password: password
}, function(data, status){
alert(data);
$(".form-control").val('');
});
}
}
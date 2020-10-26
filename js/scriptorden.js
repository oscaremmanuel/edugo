/*
* OS/Soft- PHP State Management Script
* Version 1.0.0
*/

 
function registerorden()
{
	//Obtenemos la fecha actual
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
var hoy = new Date();
var date = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
var time = hoy.getHours() + ":00:00" ;
var dateTime = date+' '+time;	

var doc_id = $("#doc_id").val();
var nroaf = $("#nroaf").val();
var bdate = $("#bdate").val();
var codprest = $("#codprest").val();
var cuitprest = $("#cuitprest").val();
var grupo = $("#grupo").val();

if(doc_id == "")
{
alert("Documento de Identidad es requerido!");
}
else if(nroaf == "")
{
alert("Numero de Afiliado es requerido!");
}
else if(bdate == "")
{
alert("Fecha es requerido!");
}
else if(codprest == "")
{
alert("Prestador  es requerido!");
}
else if(cuitprest == "")
{
alert("Prestador es requerido!");
}
else if(grupo  == "")
{
alert("Numero de Grupo es requerido!");
}
else
{

$.post("register_orden.php", {
doc_id: doc_id,
nroaf: nroaf,
bdate: bdate,
codprest: codprest,
cuitprest: cuitprest,
grupo: grupo,
dateTime: dateTime
}, function(data, status){
alert(data);
$(".form-control").val('');
});
}
}
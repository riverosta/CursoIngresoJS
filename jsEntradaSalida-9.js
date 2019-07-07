/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe;
var total;
var aumento;
importe = document.getElementById("sueldo").value;
importe = parseInt(importe);
aumento = (importe*10)/100
total = aumento + importe;
document.getElementById("resultado").value = total;


	
}

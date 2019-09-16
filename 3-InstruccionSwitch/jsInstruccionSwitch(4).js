function mostrar()
{
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
case "Febrero":
    respuesta = "tiene 28 dias";
    break;
case "Abril":
case "Junio":
case "Septiembre":
case "noviembre":
    respuesta = "tiene 30 dias";
    break;

default:
respuesta = "tiene 31 dias";               


}

alert(respuesta);

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
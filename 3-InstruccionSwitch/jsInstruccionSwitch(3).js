function mostrar()
{
/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */ 
var mesDelAño = document.getElementById('mes').value;
var respuesta;

switch (mesDelAño)
{
case "Febrero":
    respuesta = "este mes no tiene  mas de 29 dias";
    break;

default:
    respuesta = "este  mes tiene 30 o mas dias";
    break;



}
alert(respuesta);
	
	


}//FIN DE LA FUNCIÓN
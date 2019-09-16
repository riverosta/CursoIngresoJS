function mostrar()
{
/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */
var mesDelAño = document.getElementById('mes').value;
var respuesta;

switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
        {
        respuesta = "Abrigate que hace frio";
        break;    
        }    
    case "Septiempber":
    case "Octubre":
    case "Noviembre":
    case "diciembre":
        {
            respuesta = "ya pasamos el frio ahora hace calor!!";
            break;
        }            
    default:
    {
        respuesta="Falta para el invierno";
        break;
    }    
}
alert(respuesta);







}//FIN DE LA FUNCIÓN
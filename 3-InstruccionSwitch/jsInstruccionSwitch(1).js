function mostrar()
{
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */
var mesDelAño = document.getElementById('mes').value;
var respuesta;

switch(mesDelAño)
{

case "Enero": 
    respuesta = "que comiences bien el año";
    break;

case "Marzo":
    respuesta = "a clases";
    break;    
case "Julio":
    respuesta = "se viene las vacaciones!!";
    break;
case "Diciembre":
    respuesta = "Felices fiestas!!"; 
    break;


default:
respuesta = "error";
break;
}     
    alert(respuesta);


}//FIN DE LA FUNCIÓN
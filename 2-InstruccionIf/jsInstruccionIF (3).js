function mostrar()
{
//tomo la edad  
var edad;
var respuesta;
edad = document.getElementById("edad").value;

if (edad>=18)
{
    respuesta ="usted es mayor de edad";
}
else 
{
    respuesta= "sos menor";
}

alert(respuesta);


}//FIN DE LA FUNCIÓN
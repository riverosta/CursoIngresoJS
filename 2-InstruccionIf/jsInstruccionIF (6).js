function mostrar()
{
/*Al ingresar una edad debemos 
informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
var edad;
var respuesta;
edad = document.getElementById("edad").value;
if(edad>=18)
{
    respuesta="mayor de edad";
}
else if (edad>=13 && edad<=17 )
{
respuesta = "adolescente";
}
else if (edad<13)
{
    respuesta = "niño";
}

alert(respuesta);


}//FIN DE LA FUNCIÓN
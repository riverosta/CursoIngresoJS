function mostrar()

/*tomo la edad Al ingresar una edad debemos informar si la persona es mayor de edad
 (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
{
var edad;
edad = document.getElementById("edad").value;
if(edad>=18)
{
    alert("usted es mayor de edad");
}
else if (edad>=13 && edad<=17)
{
    alert("usted es adolecente");
}
else
{ 
    alert("menor de 13");
}

}//FIN DE LA FUNCIÓN
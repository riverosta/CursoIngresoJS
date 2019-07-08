function mostrar()
{
//tomo la edad Al ingresar una edad solo debemos informar si la persona NO es adolescente. 
var edad;
edad = document.getElementById("edad").value;
if (edad<13 || 17<edad)
{
    alert("usted no es adolecente");
}

}//FIN DE LA FUNCIÓN
function mostrar()
{
    //Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.

var sexo = prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")
{
    sexo = prompt("error, vuelva a ingresar")
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
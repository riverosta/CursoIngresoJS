function mostrar()
{
//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
	var numero;
	var sumaTotal=0;
	var negativoTotal=1;
	do
	{
			numero = prompt("ingrese numeros");
			numero = parseInt(numero);
			if (0<numero)
			{
				sumaTotal=numero+sumaTotal;
			}
			else
			{
				negativoTotal=numero*negativoTotal;
			}



	respuesta=confirm("¿seguir ingresando?");	
	}while(respuesta);


document.getElementById('suma').value=sumaTotal;
document.getElementById('producto').value=negativoTotal;

}//FIN DE LA FUNCIÓN
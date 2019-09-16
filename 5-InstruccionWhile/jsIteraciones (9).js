function mostrar()
{

	var contador=0;
	/* declarar variables Al presionar el botón pedir números hasta que el usuario quiera,
	 mostrar el número máximo y el número mínimo ingresado.*/
	
	var numero;
	var numeroMax;
	var numeroMin;
	var primeraIteracion = true;


	do
	{
		numero= prompt("ingrese numero");
		numero = parseInt(numero);
		

		if (primeraIteracion == true)
		{
			numeroMax = numero;
			numeroMin = numero;
			primeraIteracion = false;
		}
		else if(numeroMax<numero)
		{
			numeroMax = numero;
		}
		else if(numeroMin>numero)
		{
			numeroMin=numero;
		}
		



		respuesta = confirm("¿seguir ingresando?");
		contador++;

	}while(respuesta);

document.getElementById("maximo").value = numeroMax;
document.getElementById("minimo").value = numeroMin;


}//FIN DE LA FUNCIÓN
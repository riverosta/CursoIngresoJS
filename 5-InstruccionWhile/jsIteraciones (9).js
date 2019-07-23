function mostrar()
{

	var contador=0;
	/* declarar variablesAl presionar el botón
	 pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.*/
	
	var respuesta='si';
	var numero;
	var numero2;
	var numeromax;
	var numeromin;

	while(respuesta!='no')
	{
	 numero=prompt("ingrese numeros");
	 numero2=prompt("ingrese otro numero");
	 if (numero>numero2)
	 {
		numeromax=numero;
	 }	
	 else
	 {
		numeromin=numero2;
	 }
	 respuesta = prompt("seguir ingresando?")
	
	}
	document.getElementById("maximo").value = numeromax;
	document.getElementById("minimo").value = numeromin;






}//FIN DE LA FUNCIÓN
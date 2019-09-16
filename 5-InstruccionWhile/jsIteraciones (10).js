function mostrar()
{

	var contador=0;
		/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos. 
	2-Suma de los positivos. 
	3-Cantidad de positivos. 
	4-Cantidad de negativos. 
	5-Cantidad de ceros. 
	6-Cantidad de números pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, (positvos-negativos). */
	var numero;
	var respuesta="si";
	var positivo=0;
	var sumaPositivo=0;
	var negativo=0;
	var sumaNegativos=0
	var contadorPares=0;
	var contadorCeros=0;
	var respuesta;
	

	do
	{
		numero=prompt("ingresar un numero");
		numero=parseInt(numero);

		if (numero % 2 == 0)
		{
			contadorPares++;
		}

		if(numero>0)
		{
			positivo++;;
			sumaPositivo=numero+sumaPositivo;
			

		}
		else if(numero<0)
		{
			negativo++;
			sumaNegativos=numero+sumaNegativos;
		}
		else
		{
			contadorCeros++;
		}




		contador++;
	respuesta=confirm("seguir ingresando?");
	}while(respuesta);

	document.write("los numeros negativos fueron: "+negativo+"<br>");
	document.write("los numeros positivos fueron: "+positivo+"<br>");
	document.write("la suma de los numeros son: "+sumaPositivo+"<br>");
	document.write("la suma de los numeros son: "+sumaNegativos+"<br>");
	document.write("la cantidad de fueros fueron: "+contadorCeros+"<br>");
	document.write("la cantidad de numeros pares fueron "+contadorPares+"<br>");
	document.write("es promedio de los numeros positivos: "+sumaPositivo/contadorPares+"<br>");
	document.write("el promedio de los numeros negativos: "+sumaNegativos/negativo+"<br>");
	document.write("el producto es : "+(sumaPositivo-sumaNegativos)+"<br>");





}//FIN DE LA FUNCIÓN
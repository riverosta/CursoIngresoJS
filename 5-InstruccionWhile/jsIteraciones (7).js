function mostrar()
{//Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		numero = prompt("ingrese numeros");
		numero=parseInt(numero);
		acumulador = numero+acumulador


		contador++;
		respuesta = prompt("¿seguir ingresando?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
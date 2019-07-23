function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='SI';
	var numero;
	while(respuesta=="SI")
	{
	numero=prompt("ingresar numeros");
	while(isNaN(numero))
	{
		alert(numero+" no es un numero");
		numero=prompt("ingrese un numero");
	}
	numero=parseInt(numero);

	acumulador=numero+acumulador;
	acumulador=parseInt(acumulador);
	contador++;
	respuesta = prompt("si quiere seguir ingresando N°s escriba SI, sino pulse cualquier tecla");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
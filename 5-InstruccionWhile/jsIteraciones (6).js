function mostrar()
{
	//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		numero= prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=numero+acumulador;
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
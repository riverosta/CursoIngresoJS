function mostrar()
{
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
	var contador=0;
	var acumulador=0;
	var num1;
	acumulador = parseInt(acumulador);

	while(contador<5)
	{
		contador = contador +1;	
	num1 = prompt("ingrese numeros");
	num1=parseInt(num1);
	acumulador=mun1+acumulador;
	

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
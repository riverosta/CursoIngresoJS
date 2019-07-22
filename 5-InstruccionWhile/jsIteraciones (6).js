function mostrar()
{
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
	var contador=0;
	var acumulador=0;
	var num1;

	
	while(contador<5)
	{
		
	num1 = prompt("ingrese los numeros");
	while(isNaN(num1))
	{
		alert("error, no ha ingresado un número.");
		num1 = prompt("ingrese numero");
	}
	num1 = parseInt(num1);
	acumulador= parseInt(acumulador);

	acumulador=num1+acumulador;
	contador = contador +1;	
	}
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
function mostrar()
{
/*al presionar el botón pedir un número entre 0 y 9 inclusive. */
	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero<0 || numero>10)
	{
		numero = prompt("vuelva a ingresar");
	}
document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN
function mostrar()
{
/*Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.*/
	var numero;
	var positivo=0;
	var negativo=1;
	var respuesta='SI';

	while(respuesta=="SI")
		{
			numero=prompt("ingresar numeros");
		
			while(isNaN(numero))
			{
				alert(numero+" no es un numero");
				numero=prompt("ingrese un numero");
			}
		
			if(numero>0)
			{
			numero=parseInt(numero);
			positivo=parseInt(positivo);	
			positivo=numero+positivo;
			}
			else
				{
					negativo=numero*negativo;
					
				}
		
		respuesta = prompt("si quiere seguir ingresando números escriba SI, sino pulse cualquier tecla");

	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
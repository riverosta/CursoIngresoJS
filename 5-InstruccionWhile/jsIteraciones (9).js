function mostrar()
{

	/* declarar variablesAl presionar el botón
	 pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.*/
	
	 /* declarar variablesAl presionar el botón
	  pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.*/
	 
	
	  var respuesta;
	  var numero;
	  var maximo;
	  var minimo;
	  var esPrimeraIteracion = true;
  
	  
	  // declarar variables
  
	
	  do
	  {
  
  
	  
  
		  numero = prompt("Ingrese un numero");
		  numero = parseInt(numero);
  
		  while(isNaN(numero) || numero < -10
		   || numero > 10) {
			  numero = prompt("Error. Debe ingresar un numero entre -10 y 10. Reingrese:");			
			  numero = parseInt(numero);
		  }
  
  
		  if(esPrimeraIteracion === true)
		  {
			  maximo = numero;
			  minimo = numero;
			  esPrimeraIteracion = false;
		  }
		  else if(numero > maximo) 
		  {
			  maximo = numero;
		  }
		  else if(numero < minimo)
		  {
			  minimo = numero;
		  }
  
		   respuesta = confirm("¿Desea continuar?");
	  } while(respuesta);
  
	  document.write("Máximo = " + maximo + "<br>");
	  document.write("Mínimo = " + minimo + "<br>");



}//FIN DE LA FUNCIÓN
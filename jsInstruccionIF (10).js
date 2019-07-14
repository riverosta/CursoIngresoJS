function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
	var nota;
	nota =  Math.floor(Math.random()*(11-0))+0;
	if (nota == 9 || nota == 10)
	{
	
		alert("exelente "+nota);
	}
	else
	{
		if (nota>4)
		{
			alert("APROBÓ "+nota);
		}
		else

		{
			alert("vamos, la proxima se puede "+nota);
		}	
	}

}//FIN DE LA FUNCIÓN
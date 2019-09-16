function mostrar()
{
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
var nota;
nota = Math.floor(Math.random()*(11-0))+0;

if(nota==8 || nota==9)
{
	respuesta= "Exelente";
}
else if(nota>4)
{
	respuesta = "aprobó";
}
else
{
respuesta = "vamos , la proxima se puede";
}
alert("la noto fue: "+nota+" "+respuesta);
	

}//FIN DE LA FUNCIÓN
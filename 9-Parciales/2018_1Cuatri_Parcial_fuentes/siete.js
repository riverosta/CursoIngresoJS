function mostrar()
{
/*Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
var contador=0;
var nota;
var sexo ;
var sexof=1;
var sexom=1;
var promedio;
var notatotal=0;
while(contador<5)
{
    nota =prompt("ingresar nota");
    while ((isNaN(nota) || (nota>10 || nota<0)))
    {
        alert(nota+"no es una nota valida");
        nota = prompt("ingreasar nota");

    }
    nota=parseInt(nota);
 notatotal=nota+notatotal;
       
   sexo=prompt("ingrese su sexo f o m")
   while(sexo!="f" && sexo!="m")
   {
    alert(sexo+" no es válido");
    sexo=prompt("ingrese sexo")   
   }

   if (sexo=="f")
   {
       sexof++
   }
    else  if (sexo=="m")
    {
        sexom++
    }
   
   
contador++;
}
alert("el promedio es: "+(notatotal/5));
alert(sexof+" sexo femenino");
alert(sexom+" sexo masculino");
}

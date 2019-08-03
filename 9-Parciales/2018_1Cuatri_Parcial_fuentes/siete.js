function mostrar()
{
    /*Realizar el algoritmo que permita el ingreso por prompt de las notas
    (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
    a) El promedio de las notas totales. 
    b) La nota más baja y el sexo de esa persona. 
    c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
    var contador=0;
    var nota=0;
    var sexo ;
    var promedio;
    var notatotal=0;
    var notabaja=0;
    var sexomostrar;
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
            sexo=prompt("ingrese sexo");
        }

        if(contador==0)
        {
            notabaja=nota;
            sexomostrar=sexo;
        }
        else if(nota<notabaja)
        {
            notabaja = nota;
            sexomostar = sexo;
        }  

        if ( nota>=6 && sexo=="m")
        {
            varones++;
        }




        contador++;
    }
    alert("la nota mas baja fue :"+notabaja+"y su sexo es: "+sexomostrar);
    alert("el promedio es: "+(notatotal/5));
    alert("la cantidad de varones que obtuvieron nota baja fueron: "+varones);

}

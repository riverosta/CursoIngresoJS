function mostrar()
{
       /*Bienvenidos. 
    Realizar el algoritmo que permita iterar el ingreso de dos datos,
    una letra y un número entre -100 y 100 (validar) 
    hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
    a) La cantidad de números pares. 
    b) La cantidad de números impares. 
    c) La cantidad de ceros. 
    d) El promedio de todos los números positivos ingresados. 
    e) La suma de todos los números negativos. 
    f) El número y la letra del máximo y el mínimo. */
    var letra;
    var numero;
    var respuesta="si";
    var par=0;
    var impar=0;
    var ceros=0;
    var Positivo=0;
    var sumaNegativa=0;
    var contadorPositivo=0;
    var numeromin;
    var letramin;
    var contador=0;
    var numeromax;
    var letramax;


   while(respuesta=="si")
    {

        numero=prompt("ingrese un numero");
        numero=parseInt(numero);
        while(isNaN(numero) || numero>100 || numero<-100)
    
            {
                numero=prompt("error,ingrese numero");
                numero=parseInt(numero);

            } 
    
        letra=prompt("ingrese una letra");    
        while(!isNaN(letra)) 
        {
            letra=prompt("error,ingrese letra");
        } 

        if (numero>0)   
            {    
            Positivo = numero+Positivo;
            contadorPositivo++;
            }
                else if(numero<0)
                {
                    sumaNegativa=sumaNegativa+numero;
                }
                else
            {
                ceros++;
            }

            if ( numero%2 == 0)
            {
                par++;
            }
                else
                {
                    impar++;
                }
            if (contador==0)
            {
                numeromin=numero;
                letramin=letra;
            }
             if(numero<numeromin)
            {
                numeromin=numero;
                letramin=letra;

            }
            else
            {
               numeromax=numero;
               letramax=letra;

            }
            contador++;

        respuesta=prompt("¿quiere seguir ingresando?");
    }

    

alert("la cantidad de numeros pares fueron: "+par);     
alert("la cantidad de numero impares: "+impar);
alert("la cantidad de numeros cero fueron: "+ceros);
alert("la suma de todos los numeros negativos "+sumaNegativa);
alert("el promedio es: "+Positivo/contadorPositivo);
alert("el numero minimos fue: " +numeromin+"y la letra fue: "+letramin);
alert("el numero maximo fue: "  +numeromax+" y la letra fue: "+letramax);
}

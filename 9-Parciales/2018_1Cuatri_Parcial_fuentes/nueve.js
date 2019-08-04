function mostrar()
{
/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo. */

var marca;
var peso;
var temperatura;
var contador=0;
var par=0;
var primeraMarca=0;
var masPesado=0;
var otraMarca;
var menosPesado;
var contadorProducto=0;
var pesoTotal=0;
var contadorTemperatura=0;
var respuesta;

do
{
    marca=prompt("ingrese marca");
    while(!isNaN(marca) || marca=="pepito")
    {
        marca=prompt("marca incorrecta, vuelva a ingresar");
    }

    peso=prompt("ingrese peso");
    peso=parseInt(peso);

    while(isNaN(peso) || peso<1 || peso>100)
    {
        peso=prompt("peso incorrecto, vuelva a ingresar")
        peso=parseInt(peso);
    }
    pesoTotal=peso+pesoTotal;

    temperatura=prompt("ingrese temperatura");
    temperatura=parseInt(temperatura);
    while(isNaN(temperatura)|| temperatura>30 || temperatura<-30 )
    {
        temperatura=prompt("error, vuelva a ingresar temperatura");
        temperatura=parseInt(temperatura);
    }
    if(temperatura%2==0)
    {
        par++
    }

    if (contador==0)
    {
        primeraMarca=marca;
        masPesado=peso;
    }
    if(masPesado<peso)
    {
        masPesado=peso
        primeraMarca=marca;
    }
    else 
    {
        menosPesado=peso;
        otraMarca = marca
    }
    if (temperatura<0)
    {
        contadorTemperatura++;
    }







    contador++;
    respuesta=confirm("desea seguir ingresando?");
}while(respuesta);


document.write("las temperaturas par ingresados fueron:"+par+"<br>");
document.write("la marca más pesado: "+primeraMarca+"<br>");
document.write("el peso mínimo fue " +menosPesado+ " y la marca " +otraMarca+ " y el maximo fue " +masPesado+" y la marca "+primeraMarca+ " <br>");
document.write("la cantidad de temperatura que se conserva a menos de 0 grados es: "+contadorTemperatura+"<br>");
document.write("el promedio del peso total de los podrucctos ingresasos fueron :"+(pesoTotal/contador)+"<br>");
}

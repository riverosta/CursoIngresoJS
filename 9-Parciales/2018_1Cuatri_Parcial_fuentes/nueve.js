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
var respuesta;
var contador=0;
var contadorPares=0;
var masPesado;
var marcaMasPesado;
var contadorTemperatura=0;
var pesoTotal=0;
var menosPesado;
var marcaMenosPesado;

do
{
marca=prompt("ingresar marca");
peso=prompt("ingresar peso");
peso=parseInt(peso);

while(isNaN(peso) || peso>100 || peso<1)
{
    peso=prompt("error vuelva a ingresar");
    peso= parseInt(peso);
}
temperatura=prompt("ingrese temperatura");
temperatura=parseInt(temperatura);
while(isNaN(temperatura) || temperatura>30 || temperatura<-30)
{
    temperatura=prompt("error, vuelva a ingresar");
    temperatura=parseInt(temperatura);
}

if(temperatura%2==0)
{
    contadorPares++;
}
if(contador==0)
{
    MasPesado=peso;
    marcaMasPesado=marca;
    menosPesado=peso;
    marcaMenosPesado=marca;

}
if(masPesado<peso)
{
    masPesado=peso
    marcaMasPesado=marca;
}
else if(menosPesado<peso)
{
    menosPesado=peso;
    marcaMenosPesado=peso;
}



if(temperatura<0)
{
    contadorTemperatura++;
}
pesoTotal=peso+pesoTotal;








contador++;
respuesta=confirm("¿desea contuniar?");

}while(respuesta);





document.write("la cantidad de temperaturas pares es: "+contadorPares+"<br>");
document.write("la marca del producto mas pesado es: "+marcaMasPesado+"<br>");
document.write("la cantidad e temperatura que se conserva a nemos de 0 grados son: "+contadorTemperatura+"<br>");
document.write("el promedio del peso de los productos es: "+pesoTotal/contador+"<br>");
document.write("el peso maximo es "+masPesado+"<br>");
document.write("el peso minimo es "+menosPesado+"<br>");






}

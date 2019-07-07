/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt(numero1);
    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);
    sumar = numero1 + numero2;
    alert("la suma es "+sumar);
}

function restar()
{var numero1;
 var numero2;
 var restar;
 numero1 = document.getElementById("numeroUno").value;
 numero2 = document.getElementById("numeroDos").value;
 numero1 = parseInt(numero1);
 numero2 = parseInt(numero2);
 resta = numero1 - numero2;
 alert("la resta es : "+resta);

	
}

function multiplicar()
{   var numero1;
    var numero2;
    var multi;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    multi = (numero1 * numero2);
    alert("la multiplicacion es : "+multi);


}

function dividir()
{
    var numero1;
    var numero2;
    var div;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    div = numero1 / numero2;
    alert("la división es: "+div);
}


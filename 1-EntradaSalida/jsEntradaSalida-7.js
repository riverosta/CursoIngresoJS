/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
var numero2;
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
numero1=parseInt(numero1);
numero2=parseInt(numero2);
alert("la suma es"+(numero1+numero2));

}

function restar()
{
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);	
    alert("la resta es: "+(numero1-numero2));
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);	
    alert("la multiplicacion es :"+(numero1*numero2));
}

function dividir()
{
	var numero1;
var numero2;
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
numero1=parseInt(numero1);
numero2=parseInt(numero2);
alert("la division es "+(numero1/numero2));
}


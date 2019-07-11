function mostrar()
{
/*tomo la edad  Al ingresar una edad menor a 18 años
 y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

    var edad;
    edad = document.getElementById("edad").value;
    
    var estadoCivil = document.getElementById("estadoCivil").value;

    if ( (edad<18) && (estadoCivil != "Soltero") )
    {
        alert("es muy pequeño para no ser soltero");

    }


}//FIN DE LA FUNCIÓN
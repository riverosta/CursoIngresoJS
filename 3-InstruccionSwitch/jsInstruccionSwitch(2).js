function mostrar()
{
/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
   
    case "julio":
         {
         alert("abrigate que hace frio");
        break;
         }
    case "Agosto":
        {
         alert("abrigate que hace frio");
        break;
        }
    case "Septiembre":
        {
         alert("hace calor");
        break; 
        } 
    case "Octubre":
        {
        alert("hace calor");
        break;
        } 
    case "Noviembre":
        {
        alert("hace calor");
        break;    
        }  
    case "Diciembre":
        {
         alert("hace calor");
         break;   
        }
    default:
        {
            alert("falta mucho para el invierno");
            break;
        }    


    }
                          
}//FIN DE LA FUNCIÓN
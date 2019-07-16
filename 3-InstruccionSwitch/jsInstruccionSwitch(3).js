function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
            {
                alert("Este mes no tiene mas 29 más días");
                break;    
            }
    default:
        {
            alert("es mes tiene 30 o mas dias");
            break;
        }        
   
	
	
    }

}
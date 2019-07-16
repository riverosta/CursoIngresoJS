function mostrar()
{
/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días. */
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Febrero":
            {
            alert("tiene 28 dias");
            break;
            }
        
        case "Abril":
            {
                alert("tiene 30 dias");
                break;
            }
        case "Junio":
            {
                alert("tiene 30 dias");
                break;
            }
        case "Septiembre":
            {
                alert("tiene 30 dias");
                break;
            }  
        case "Noviembre":
            {
                alert("tiene 30 dias");
                break;
            }  
        default:
            {
                alert("tiene 31 dias");
                break;
            }        
        
	


    }
}//FIN DE LA FUNCIÓN
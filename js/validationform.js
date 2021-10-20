
 var nombre = document.getElementById('nombre-y-apellido');
 var correo = document.getElementById('email');
 var tel = document.getElementById('tel');
 var consulta = document.getElementById('consulta');
 

function validarFormulario(){

    if(nombre.value===""){
        alert("Ingrese su Nombre y Apellido.");
        return false;
    }
    else if (correo.value===""){
        alert("Ingrese su dirección de correo electrónico.");
        return false;
    }

    else if(tel.value===""){
        alert("Ingrese su número de contacto.");
        return false;
    }
    else if(isNaN(parseInt(formulario.tel.value))){
        alert("El campo telefónico sólo acepta valores numéricos.");
        return false;
    }
    else if(consulta.value===""){
        alert("Indique su consulta.");
        return false;
    }
    else{
        alert("Su consulta ha sido enviada. ¡Muchas gracias!") 
        return;
    }

    
}
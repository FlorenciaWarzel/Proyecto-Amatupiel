// let nombre = document.getElementById('nombre-y-apellido');
// let correo = document.getElementById('email');
// let tel = document.getElementById('tel');
// let consulta = document.getElementById('consulta');
// let error = document.getElementById('error');
// let correcto = document.getElementById('correcto');

// error.style.color ='red'

// function validarFormulario(){

//     let mensajeError = [];

//     if(nombre.value === null || nombre.value === ''){
//         mensajeError.push('Ingresa tu nombre');
//     }

//     if(correo.value === null || correo.value === ''){
//         mensajeError.push('Ingresa tu e-mail');
//     }

//     if(tel.value === null || tel.value === ''){
//         mensajeError.push('Ingresa tu número telefónico');
//     }

//     if (isNaN(parseInt(formulario.tel.value))){
//         mensajeError.push('El campo telefónico sólo acepta valores numéricos');
//     }

//     if(consulta.value === null || consulta.value === ''){
//         mensajeError.push('Ingresa tu consulta');
//     }
    
//         error.innerHTML = mensajeError.join(', ');
//     return false;
    

// }


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
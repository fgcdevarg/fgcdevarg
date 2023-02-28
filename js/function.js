
/** --------------------------------------------------------
 * ---------- Inicio - Validación de Formulario --------------------
 ------------------------------------------------------------ */

document.getElementById("enviar").addEventListener('click',function(){
    var esCorrecto = true;
    var mErr = "Corrija los siguientes campos: \n";

    if(!nombre_es_string()){
        mErr = mErr + "- Nombre \n";
        esCorrecto = false;
    } 
    
    if(!apellido_es_string()){
        mErr = mErr + "- Apellido \n";
        esCorrecto = false;
    }

    if(!es_email()){
        mErr = mErr + "- Correo Electrónico \n";
        esCorrecto = false;
    }

    if(!es_telefono()){
        mErr = mErr + "- Telefóno \n";
        esCorrecto = false;
    }


    if(esCorrecto == false){
        alert(mErr);
    }else{
        alert('Los datos ingresados en el formulario se han guardado correctamente')
    }
})



/**--------- Funciones de Validación ---------------------------- */

function nombre_es_string(){
    var nombreesstring = document.getElementById('nombre').value;
    if (isNaN(nombreesstring)){
        return true;
    }else {
        return false;
    }
}

function apellido_es_string(){
    var apellidoesstring = document.getElementById('apellido').value;
    if (isNaN(apellidoesstring)){
        return true;
    }else {
        return false;
    }
}

function es_email(){
    var emailField = document.getElementById('user-email');
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(emailField.value) ){
        return true;
    }else{
        return false;
    }
}


function es_telefono(){
    var expresion = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var nrotelef = document.getElementById('telefono').value;
    if(expresion.test(nrotelef)){
        return true;
    }else{
            return false;
        }
}



/** --------------------------------------------------------
 * ---------- Fin - Validación de Formulario --------------------
 ------------------------------------------------------------ */


/**
document.addEventListener('click', function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("inicioo").innerHTML = "Estamos en seccion Inicio"
});
 */


/**
document.getElementById("inicioo").addEventListener('click',function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("inicioo").innerHTML = "Estamos en seccion Inicio"
})
*/
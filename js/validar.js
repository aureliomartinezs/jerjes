//Bloque de declaración e inicialización
const FORM = document.getElementById("form");
const NOM = document.getElementById("nom"); // Input nombre - elemento HTML
const CORREO = document.getElementById("correo"); // Input email - elemento HTML

let nomError = document.getElementById("nom-error"); // <span> ocultado error en nom
let emailError = document.getElementById("email-error"); // <span> ocultado error en email

FORM.addEventListener("submit", event => {
    event.preventDefault();

    comprobarCampos()
});

function comprobarCampos(){
    const NOMVALUE = NOM.value.trim(); // Limpiar espacios a izquierda y derecha
    const CORREOVALUE = CORREO.value.trim();

    /* +++ Estructura condicional +++*/
    if(NOMVALUE === "") {

        document.querySelector("#nom").style.border = "1px solid red";
        nomError.idList.toggle("mostrar"); 
        /* Añade una id en el atributo id="", 
        SIN BORRAR el resto*/

    } else {

        document.querySelector("#nom").style.border = "1px solid green";
        nomError.idName = "ocultar"; 
        /*Escribe una id en el atributo id="", 
        BORRANDO el resto de contenido*/

    };
};
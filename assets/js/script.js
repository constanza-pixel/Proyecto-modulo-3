/* 
  ENTRADA (INPUT)
  Usuario hace click o envía formulario
*/
const formulario = document.getElementById("contactForm");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

/* 
  PROCESO
  Manipulación del DOM
 */

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if(
        nombre.value.trim()==="" ||
        email.value.trim()==="" ||
        mensaje.value.trim()===""
    ){

/* 
 SALIDA (OUTPUT)
*/

alert("Debe completar todos los campos.");
        return;

    }

alert(`Gracias ${nombre}, te contactaremos pronto`);

  form.reset();

});
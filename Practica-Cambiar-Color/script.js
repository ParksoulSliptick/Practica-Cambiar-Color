/* Obtener referencias al parrafo y al button */

const color = document.getElementById("color");
const button = document.getElementById("button");

/* Manejar el evento */

button.addEventListener( "click" , cambiarColor )

/* Definimos la funcion */

function cambiarColor() {
    /*Codigo que se ejecuta*/

    /*Funcion Anidada*/
    function colores(){
     const opciones = "0123456789ABCDEF";
     let colorHex = "#";

     /*Recorrer el string opciones */
     for (let i = 0 ; i < 6 ; i++ ){
        let indiceAleatorio = Math.floor(Math.random() * 16); 
        colorHex += opciones[indiceAleatorio];  // #000000
     }

     return colorHex; 

    }

    let colorAleatorio = colores();
    /*Actualiza el texto*/
    color.textContent = colorAleatorio;
    /*Actuaiza el color de fondo*/
    document.body.style.backgroundColor = colorAleatorio;
}
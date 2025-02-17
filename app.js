/*
“Cualquier idiota puede escribir un programa que una computadora 
entiende, los verdaderos programadores pueden escribir código que 
los humanos entienden.” – Martin Fowler
*/

//Atributos
let arrayAmigos=[];

//Métodos
function limpiarCaja() {
    document.getElementById('amigo').value = ''; ;
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    
    if (nombre !== ""){
        arrayAmigos.push(nombre);
        limpiarCaja();
        console.log(arrayAmigos);
    } else {
        alert('Por favor, ingrese un nombre primero.');
    }
}
/*
“Cualquier idiota puede escribir un programa que una computadora 
entiende, los verdaderos programadores pueden escribir código que 
los humanos entienden.” – Martin Fowler
*/

//Atributos
let arrayAmigos=[];

//Métodos
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    
    if (nombre !== ""){
        for(let i = 0; i < arrayAmigos.length; i++){ //Revisar si ya existe el nombre en el array
            if (equalsIgnoreCase(nombre, arrayAmigos[i])){// Nota: Revisar si existe el equalsIgnoreCase
                alert('¡Ya has escrito ese nombre!');
                return;
            }
        }
        arrayAmigos.push(nombre);
        limpiarCaja();
        actualizarLista();
        console.log(arrayAmigos);
    } else {
        alert('Por favor, ingrese un nombre primero.');
    }
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; //Limpia para evitar duplicados
    for (let i = 0; i < arrayAmigos.length; i++){
        let elementoLista = document.createElement('li');
        elementoLista.textContent = arrayAmigos[i];
        lista.appendChild(elementoLista);
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    if(!(arrayAmigos.length <= 1)){
        let indiceSorteo = Math.floor(Math.random()*arrayAmigos.length);
        resultado.innerHTML = `✨ ¡${arrayAmigos[indiceSorteo]} es el amigo secreto! ✨`; 
    } else {
        alert(arrayAmigos < 1 ? '¡No hay ninguna persona en la lista!' : '¡Sólo hay una persona en la lista!');
    }
}

//Métodos de utilidad
function equalsIgnoreCase(cadena1, cadena2){
    return cadena1.toLowerCase() === cadena2.toLowerCase();
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigo = [];

function agregarAmigo(params) {
    let nombre = document.getElementById('amigo').value;
    //console.log(nombre);
    let valor = nombre.trim(); // trim() para eliminar espacios en blanco al principio y al final.
    if (valor === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        listaAmigo.push(nombre);
        //console.log(listaAmigo); 
        visualizarLista();
    }
    limpiarInput();
    return;
}
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}
function visualizarLista() {

    agregarTextoLista('resultado', '');

    let ulAmigos = document.getElementById('listaAmigos');
    ulAmigos.innerHTML = "";

    // Iterar sobre la lista de nombres
    for (let index = 0; index < listaAmigo.length; index++) {
        // Crear un elemento <li>
        let li = document.createElement('li');
        // Añadir el nombre al <li>
        li.textContent = listaAmigo[index];
        // Añadir el <li> al <ul>
        ulAmigos.appendChild(li);
        //console.log(listaAmigo[index]);
        
    }
    return;
}
function sortearAmigo() {
    
    if (listaAmigo.length != 0) {
        let numeroSorteado =  Math.floor(Math.random()*listaAmigo.length)+1;
        console.log(numeroSorteado);
        
        let ulResultado = document.getElementById('resultado');
        ulResultado.innerHTML = "";

        let li = document.createElement('li');
        li.textContent = listaAmigo[numeroSorteado-1];
        ulResultado.appendChild(li);

        agregarTextoLista('listaAmigos', '');
        
    }
    return;
}

function agregarTextoLista(idEtiqueta, valor){
    // Obtener el elemento <ul> con el id ej:"listaAmigo"
    let ul = document.getElementById(idEtiqueta);
    // Asignamos valor a ul.
    ul.innerHTML = valor;
    return;
}



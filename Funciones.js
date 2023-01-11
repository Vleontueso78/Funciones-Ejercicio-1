// Codigo N°1

function saludar() {
    console.log("Hola me llamo Victor Tueso")
}

saludar()

// Codigo N°2
// Funcion Declarada

function estoEsUnafuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

//Inovacion de funcion

estoEsUnafuncion();

// Codigo N°3
// Funcion Declarada

function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retornado una cadena de texto"
}

let valorDeFuncion = unaFuncionqueDevuelveValor();

console.log(valorDeFuncion);
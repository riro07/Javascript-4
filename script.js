
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
//     miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
//     indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por 
//     cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
//     Hola Mundo Hola Mundo Hola Mundo.

// 1
function numeroDeContenido(a){

    if(!isNaN(a)){
        console.log("Acabas de mandar numeros");
    }else if(a == undefined){        
        console.log("No escribiste nada");
    }else{
        let respuesta = a.length;
        console.log(respuesta);
    }
}

numeroDeContenido("Hello word");

// 2
// cadena.substring(indiceA[, indiceB'])

function extraer(texto= "", numero){
    if((!texto || !isNaN(texto)) || numero == undefined){
        return console.log("Hubo un error, coloco mal los datos requeridos");
    }else{    
        let ejemplo = texto;
        console.log(ejemplo.slice(0, numero));
    };
};

extraer("Hello world", 5);

// 3
//cadena.split([separador][,limite])

function dividirString(a){
    let resultado = a;
    let nuevoResultado = resultado.split(" ");
    return console.log(nuevoResultado);

};

dividirString("Hello Worlds Para Todos!!!");


// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
//     miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
//     indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por 
//     cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
//     Hola Mundo Hola Mundo Hola Mundo.
/*
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

// 1 PRO
const contarCaracteres = (cadena = "")=>
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres("Hola mundo");


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

// 2 PRO

const recortarTexto = (cadena="", longitud=undefined)=>
    (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(longitud === undefined)
    ?console.warn("No ingresaste la longitud para ingresar el texto")
    :console.info(cadena.slice(0, longitud))

recortarTexto("Hola mundo", 4);
recortarTexto();
recortarTexto("Hola hola");
recortarTexto("", 5);

// 3
//cadena.split([separador][,limite])

function dividirString(a=""){
    if(a == false || typeof(a) == typeof(23)){
        console.log("Por favor ingrese un valor");        
    }else{
        let resultado = a;
        let nuevoResultado = resultado.split(" ");
        return console.log(nuevoResultado);
    }

};

dividirString("23432");

// 3 PRO

const cadenaAArreglo = (cadena="", separador=undefined)=>
    (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(separador === undefined)
    ?console.warn("No ingresaste el caracter separador")
    :console.info(cadena.split(separador))

cadenaAArreglo("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", " ")
cadenaAArreglo("Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec", ",");
cadenaAArreglo();
cadenaAArreglo("Hola mundo");
cadenaAArreglo("", "-");


// 4

const repetirValor = (a, b) =>{
    //let resultado = a.repeat(b); 
    //console.log(resultado);
    let x = 0;
    while(x < b){
        x++;
        console.log(a);
    }

}

repetirValor("Hello world", 5)

// 4 PRO

const repetirTexto = (texto="", veces=undefined)=>{
    if(!texto) return console.warn("No ingresaste un texto");
    if(veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto");
    if(veces === 0) return console.error("El número de veces no puede ser 0");
    if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");
    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirTexto("Hello world", 3);
repetirTexto("Hello world", 0);
repetirTexto("Hello world", -20);
repetirTexto("", 20);
repetirTexto("Hello world");

*/

// 5) Programa una función que invierta las palabras de una cadena de texto, pe.
//  miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
//  miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual 
//  en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
//  miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// 5

const invertirTexto = (a=undefined) => (a===undefined)
    ?console.warn("No a colocado ningun valor de tipo string")
    :console.log(a.split("").reverse().join(""))

invertirTexto();
invertirTexto("Hello world");
//return s.split("").reverse().join("");

let hola = "Hello world";
hola = hola.split("");
console.log(hola);
hola = hola.reverse();
console.log(hola);
hola = hola.join("");
console.log(hola);

// 6

const contadorPalabras = (cadena="", texto="")=>{
    if(!cadena) return console.warn("No ingresaste el texto largo")
    if(!texto) return console.warn("No ingresaste la palabra a evaluar")

    let i = 0, contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

contadorPalabras("hola como estas hola pepe hola pepa", "hola");


let ejemplo = "hola como estas hola pepe hola pepa";

let resultado = ejemplo.indexOf("hola", 24);
console.log(resultado);


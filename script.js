/*
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

contadorPalabras();
contadorPalabras("hola como estas hola pepe hola pepa", "hola");

// let ejemplo = "hola como estas hola pepe hola pepa";
// let resultado = ejemplo.indexOf("hola", 24);
// console.log(resultado);

// 7

const palindromo = (valor = "")=>{
    if(!valor) return console.info("Coloque un valor");

    let resultado = valor.toLowerCase();
    let resultadoAComparar = resultado.split("").reverse().join("");
    
    return (resultado == resultadoAComparar)
    ?console.log(`El valor "${valor}" SI es un palindromo.`)
    :console.log(`El valor "${valor}" NO es un palindromo.`)
}

palindromo();
palindromo("join mircha");
palindromo("Otto");

// 8

const eliminarCaracteres = (valor="", eliminarvalor="")=>{
    if(!valor) return console.warn("No ha ingresado valor a evaluar");
    if(!eliminarvalor) return console.warn("No ha ingresado el valor para eliminar");
    
    let valorFinal = valor.replace(new RegExp(eliminarvalor, "ig"), "");
    if(valor === valorFinal){
        return console.log(`El valor "${eliminarvalor}" no se encuentra en el texto`);
    }else{
        return console.log(valorFinal);        
    }

    
}

eliminarCaracteres()
eliminarCaracteres("aeiou, aeiou, aeiou, aeiou", "r")
eliminarCaracteres("aeiou, aeiou, aeiou, aeiou", "a");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual 
//     en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero 
//     positivo n, se define como el producto de todos los números enteros positivos desde 1 
//     hasta n), pe. miFuncion(5) devolverá 120.

// 9

const numeroAleatorio = ()=> console.log(`Numero aleatorio entre 501 y 600: ${Math.round(Math.random() * (600 - 501) + 501)}`);
numeroAleatorio();

// 10

const numeroCapicua = (numero="") =>{
    if (!numero) return console.info("No ha colocado el numero a evaluar");
    
    let numeroString= String(numero) ;
    
    let resultado = numeroString.split("").reverse().join("");
    
    if (resultado === numeroString) {
        return console.info(`El numero ${numero} es capicua`)
    }else{
        return console.info(`El numero ${numero} no es capicua`)
    }

}

numeroCapicua();
numeroCapicua(123);
numeroCapicua(111);

// 11
// miFuncion(5) devolverá 120.

const factorial = (numero="") => {
    if (!numero) return console.info("No ha colocado el numero a evaluar");
    

    let resultado = 1;
                        
    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return console.log(`El factorial de ${numero} es : ${resultado}`);
}
factorial(5);

*/
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por
//  sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. 
//  miFuncion(0,"C") devolverá 32°F.
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
//  miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una 
//  cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día 
//  de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y 
//  consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe.
//  miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. 
//  miFuncion("jonmircha@gmail.com") devolverá verdadero.
// 21) Programa una función que dado un array numérico devuelve otro array con los números 
//  elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de 
//  dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el 
//  primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
//  devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// 
//  La expresión regular que uso para el email en este video 
//  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el 
//  primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. 
//  miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
//  iFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
//  promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
// 
// 27) Programa una clase llamada Pelicula.
// 
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película 
// en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.
// 
//  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary 
//  ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, 
//  Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

// 12
/*
const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
        console.log(x)
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

console.log(esPrimo(76));


// miFuncion(7) devolverá true.

// if(2 < 67 / 2) console.log("true")
// console.log(67 % 3 )
*/

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (value)=>{
    if(isNaN(value)) return console.error("Pon un numero por favor");

    if(value % 2 == 0){
        return console.log("El numero es par")
    }else{
        return console.log("El numero es impar")
    }; 
        
};

parImpar(33);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa.
// pe.miFuncion(0,"C") devolverá 32°F.

const convercionCelFah = (grados, x)=>{
    if(x === "C"|| x === "c") return console.log(`${((grados * (9/5)) + 32)}°F`);
    
    if(x === "F"|| x === "f") return console.log(`${(grados - 32) * (5/9)}°C`);
    
    console.log("Fin");
    //let resultado = (0 °C × 9/5) + 32 = 32 °F;

};

convercionCelFah(1, "c");
convercionCelFah(3, "f");
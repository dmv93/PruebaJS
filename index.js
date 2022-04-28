/* 
TENGO LOS DOS EJERCICIOS AQUI PARA COMPROBARLOS
EL PRIMERO ESTA SIN COMENTAR
EL SEGUNDO COMENTADO
*/



/*
1. Solicita al usuario que elija entre la opción 1 o 2:
Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
Se le debe pedir una palabra y comprobar si empieza o termina por a
*/

var elegir = prompt("Elige entre la opción 1 o 2");
elegir = parseInt(elegir);

if (elegir == 1) {
  alert("Tienes que darme a continuación dos números");
  var primero = prompt("Dime el primer número");
  primero = parseInt(primero);
  var segundo = prompt("Dime el segundo número");
  segundo = parseInt(segundo);

  if (
    primero % 2 == 0 &&
    primero % 7 == 0 &&
    segundo % 2 == 0 &&
    segundo % 7 == 0
  ) {
    alert(
      "El número " +
        primero +
        " es par y múltiplo de 7, el número " +
        segundo +
        " es par y múltiplo de 7"
    );
  } else if (
    primero % 2 == 0 &&
    primero % 7 == 0 &&
    !segundo % 2 == 0 &&
    !segundo % 7 == 0
  ) {
    alert("El número " + primero + " es par y multiplo de 7");
  } else if (
    segundo % 2 == 0 &&
    segundo % 7 == 0 &&
    !primero % 2 == 0 &&
    !primero % 7 == 0
  ) {
    alert("El número" + segundo + " es par y multiplo de 7");
  } else if (
    (!primero % 2 == 0 && !primero % 7 == 0) ||
    (!segundo % 2 == 0 && !segundo % 7 == 0)
  ) {
    alert(
      "Ninguno de los dos numero " +
        primero +
        " " +
        segundo +
        " son pares o multiplo de 7"
    );
  } else {
    alert("Error al introducir los datos, recarga la página y hazlo de nuevo");
  }
} else if (elegir == 2) {
  alert("Tienes que darme a continuación una palabra");
  var palabra = prompt("Dime la palabra");
  var letra = "a";

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[0] === letra && palabra[palabra.length - 1] === letra) {
      alert("La palabra " + palabra + " termina y empieza por la letra a");
      break;
    } else if (palabra[palabra.length - 1] === letra) {
      alert("La palabra " + palabra + " termina por la letra a");
      break;
    } else if (palabra[0] === letra) {
      alert("La palabra " + palabra + " empieza por la letra a");
      break;
    } else {
      alert("La palabra " + palabra + " no empieza ni termina por a");
      break;
    }
  }
} else {
  alert("Error al introducir los datos, recarga la página y hazlo de nuevo");
}

/*

Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta.


alert('A continuación tienes que darme una frase')
var eleccionUser = prompt('Dime la frase');

var comprobar = eleccionUser.split(' ')
var count = 0;

for (let i = 0; i < comprobar.length; i++) {
    count++
}

alert('El número de palabras que tiene tu frase es de ' + count)



*/

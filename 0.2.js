const { Console } = require("console-mpds");
const console = new Console();

/*
Introduce el numerador de la fracción: 2
Introduce el denominador de la fracción: 3
Introduce un exponente: 5

La fracción 2/3 elevado a 4 es la fracción 16/81
*/

const numerator = console.readNumber(`Introduce el numerador de la fracción:`)
const denominator = console.readNumber(`Introduce el denominador de la fracción:`)
const exponent = console.readNumber(`Introduce un exponente:`)
console.writeln(`La fracción ${numerator}/${denominator} elevado a 4 es la fracción es la fracción ${numerator ** exponent}/${denominator ** exponent}`)
const { Console } = require("console-mpds");
const console = new Console();

/*
Primera fracción:
Introduce el numerador de la fracción: 2
Introduce el denominador de la fracción: 3
Segunda fracción:
Introduce el numerador de la fracción: 3
Introduce el denominador de la fracción: 4

La suma de la fracción 2/3 y la fracción 3/4 es la fracción 17/12
*/

const numeratorOne = console.readNumber(`Primera fracción:
Introduce el numerador de la fracción:`);
const denominatorOne = console.readNumber(`Introduce el denominador de la fracción:`);
const numeratorTwo = console.readNumber(`Segunda fracción:
Introduce el numerador de la fracción:`);
const denominatorTwo = console.readNumber(`Introduce el denominador de la fracción:`);

const denominator = denominatorOne * denominatorTwo;
const numerator = denominator / denominatorOne * numeratorOne + numeratorTwo * denominator / denominatorTwo;

console.writeln(`La suma de la fracción ${numeratorOne}/${denominatorOne} y la fracción ${numeratorTwo}/${denominatorTwo} es ${numerator}/${denominator}`);
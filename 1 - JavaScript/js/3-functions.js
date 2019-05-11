'use strict';


function multiply(parametr1, parametr2, parametr3) {

    let result;

    result = parametr1 * parametr2 * parametr3;

    return result;
}

let wynik = multiply(3, 9, 10);


console.log("Wynik: " + wynik);


let funkcja = function () {
    return "wynik :)"
};



console.log( funkcja );
console.log( funkcja() );

let funkcjaStrzalkowa = () => {
    return 'Jestem w funkcji';
}

console.log(funkcjaStrzalkowa());
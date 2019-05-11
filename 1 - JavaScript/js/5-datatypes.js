'use strict';


/*

Typ liczbowy

*/
let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata);




/*

Typ - łańcuch znakow - string

*/
let wyplataStr = "5000";
let premiaStr = "2500";
let calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);




/*

Typ logiczny - boolean

*/
let czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa ;)");
}




/*

Typ specjalne - undefined / null

*/
let niezdefiniowanaZmienna;
let nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);




let imieStudenta = "Michał";
console.log(imieStudenta.indexOf('c'));


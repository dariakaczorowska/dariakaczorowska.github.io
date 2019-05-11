/*var sum = 10 + 10;
console.log(sum)


var myVar = 87;

myVar++;

console.log(myVar)

var remainder;
remainder = 11 % 3;
console.log(remainder)

var remainder;
remainder = 12 % 2;
console.log(remainder)

var myStr = " I am a \"double quaoted \" string "
console.log(myStr)

var myStr = "FirstLine\n\\SecondLine\nThirdLine"
console.log(myStr)

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

console.log(firstNameLength)

function wyswietlZmienna() {
    let imie = 180; 
    console.log(imie)
}

imie = "Sergio";

wyswietlZmienna();

console.log(imie);

function multiply(parametr1,parametr2,parametr3) {
    let result;
    result = parametr1 * parametr2 * parametr3;
    return result;
}

let wynik = multiply(3,9,10);

console.log("Wynik : " + wynik);


let funkcja = function () {
    return "Wynik :) "
};

console.log ( funkcja );
console.log ( funkcja () );

let funkcjaStrzalkowa = () => {
    return "Jestem w funkcji";
}

console.log(funkcjaStrzalkowa());

let number = 10;

function addNumber () {
    let number = 15;
    let newNumber = 20;
    console.log(number);
    console.log(newNumber);
}

addNumber();

console.log(number);

function addNumbers (parametr1, parametr1) {
    let result = parametr1 + parametr2;
    return result;
}

/* let wyplata = 5000;
let premia = 2500;

let calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata); */

/*let wyplata = "5000";
let premia = "2500";

let calkowitaWyplataStr = wyplata + premia;

console.log(calkowitaWyplataStr);

let age = 14;
let wiek = `Ola ma ${age} lat`;

console.log(wiek);

let czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest Smog"); }
    else {
    console.log("Nie ma Smogu");
    }


let niezdecydowanaZmienna;
let nullowaZmienna = null;

console.log(niezdecydowanaZmienna);
console.log(nullowaZmienna);

let imieStudenta = "Michał";
console.log(imieStudenta.indexOf('M'));

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Geralt');

console.log(imiona);

/* let names = ['Marcin', 'Ania','Sara'];
names [3] = 'Filip';
names [4] = 'Alicja';

console.log(names[3] + ' i ' + names[4]);

console.log(names);

names.push('Michal');

console.log(names[5])

console.log(names); */

/*let names = ['Ania','Bartek','Marcin'];
names.pop();

console.log(names);*/

/*let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Geralt');

console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona);


console.log(imiona.unshift('Robert'));

console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

console.log(imiona.length);

imiona.push("Kaja");

console.log(imiona);

/*for (let i = 0; i < 4 ; i++) {
    console.log( imiona[i] );
}*/

/*for (let i = imiona.length-1; i >= 0 ; i--) {
    console.log(imiona[i]);
}*/

/*imiona.forEach(function (element, i) {
    console.log('Element nr ' + i + ' = ' + element);
});*/

/*let imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

let zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);

console.log(zbiorImion.indexOf("Mariusz"));

console.log( Array.isArray(zbiorImion) );

console.log( zbiorImion.slice(2, 5) );

zbiorImion.splice(2, 3, "Julek", "Krzyś");

console.log(zbiorImion);

console.log( zbiorImion.toString() );*/

/*let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {console.log(this.imie)}
}

let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);

console.log(kaja);*/

/*class Osoba {

    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost;
        this.oczy;
    }


    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" +
            "Nazwisko: " + this.nazwisko + "\n" +
            "Wzrost: " + this.wzrost + "\n" +
            "Oczy: " + this.oczy);
    }

}



let krystian = new Osoba('Krystian', 'Dziopa');

krystian.wzrost = 180;
krystian.oczy = "niebieskie";

krystian.wyswietlInfo();

let daria = new Osoba ('Daria', 'Kaczorowska');

daria.wzrost = 168;
daria.oczy = 'zielone';

daria.wyswietlInfo();



let kaja = new Osoba('Kaja', 'Stefaniak');

kaja.wyswietlInfo();



let osoba = {
    imie: "Marcin",
    wzrost: 180,
    wyswietlDetale() {
        console.log(this.imie + " " + this.wzrost);
    }
}


osoba["imie"] = "Kasia";
osoba.wzrost = 170;

osoba.oczy = "niebieskie";

osoba.wyswietlDetale = function () {
    console.log(this.imie + " " + this.wzrost + " " + this.oczy);
}

osoba.wyswietlDetale();

console.log( Math.PI );

console.log( Math.cos(0) );

let liczba1 = 13, liczba2 = 5;

let wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

while (liczba2 < liczba1) {
    console.log(liczba1);
    --liczba1;
}

(2>5) ? console.log("tak") : console.log("nie");

let number = -1;
if (number>0) {
    console.log('Jest'); }
    else {
        console.log('Nie jest');
    }

    if ("2" === 2) {
        console.log("prawda");
    } else {
        console.log("Nie prawda");
    }

    if ( !( ("2" !== 2) && (8 < 4) ) ) {
        document.write("<br> prawda");
    }
*/

/*let wzrostMateusz = 190;
let wzrostOlgi = 160;

if ( wzrostOlgi < wzrostMateusz ) {
    console.log("Olga jest niższa :)");
}

if ( wzrostOlgi > wzrostMateusz ) {
    
    console.log("Olga jest wyższa :)");
    
} else {
    
    console.log("Olga jest niższa");
    
}

if ( wzrostOlgi > wzrostMateusz ) {

    console.log("Olga jest wyższa :)");

} else if ( wzrostOlgi == wzrostMateusz ) {

    console.log("Olga tak wysoka jak Mateusz");

} else {

    console.log("Olga jest niższa");

}

let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')        
}*/

/*for (let i = 0; i<5; i++) {
    console.log(i);
}

let names = ['Ania','Krystian','Daria'];

names.forEach (function (element, index)  {
console.log('Element z indeksem ' + index + ' ma wartość ' + element);
})

let person = {
    name: 'Krystian',
    age: 35
}

for(let key in person) {
    console.log(person[key]);
}

let number = 0;

do {
    console.log(number++);
} while (number > 2);

let i = 0;
while (true) {
    console.log ( 'napis [i = ' + i + '] ' ); 
    if ( i++ >= 9 ) { break };
}

for(let i=1; i<=20; i++){
    if ( i % 2 != 0 ) { continue };
    console.log ( i + ' ' );
}*/

let jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}

console.log(jsonOsoby);


jsonOsoby.osoby[2].zainteresowania.forEach( function (element, index) {
    console.log(element.nazwa);
});

    










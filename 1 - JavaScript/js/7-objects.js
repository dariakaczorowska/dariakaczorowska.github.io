"use strict";

//let kaja = {
//    imie: "Kaja",
//    wzrost: 152,
//    przedstawOsobe() {console.log(this.imie)}
//}
//
//let krystian = {
//    imie: "Krystian",
//    wzrost: 180,
//    przedstawOsobe() {console.log(this.imie)}
//}
//
//kaja.przedstawOsobe();
//krystian.przedstawOsobe();
//
//console.log(kaja.wzrost);
//
//console.log(kaja);
//

class Osoba {

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
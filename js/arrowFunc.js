// iprastine funkcijos deklaracija
function sum(a, b) {
    return a + b;
}
console.log(sum(88, 99));

// kintamajam priskirta anonimine funkcija
const atimtis = function (a, b) {
    return a - b;
}
console.log(atimtis(14, 55));

// arrow function (rodykline funkcija)
const dalyba = (a, b) => {
    return a / b;
}
console.log(dalyba(81, 3));

// arrow function - jei logika sudaryta tik is vienos proceduros
// galima nerasyti {} ir return
const daugyba = (a, b) => a * b;
console.log(daugyba(81, 3));

// arrow function - jei yra tik vienas gaunamas parametras
// galima nerasyti ()
const kvadratu = a => a * a;
console.log(kvadratu(10));
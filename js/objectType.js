const skaiciu = 7;                          // number
const teksta = 'dasfdg';                    // string
const tiesa = true;                         // boolean
const melas = false;                        // boolean
const pazymiai = [5, 10];                   // object (array)
const zodziai = ['Labas', 'rytas'];         // object (array)


console.log(skaiciu, typeof skaiciu);
console.log(teksta, typeof teksta);
console.log(tiesa, typeof tiesa);
console.log(melas, typeof melas);
console.log(pazymiai, typeof pazymiai);
console.log(zodziai, typeof zodziai);

/*
zmogus = [vardas, pavarde, kiek metu]
*/
const arrayZmogus = ['Vardenis', 'Pavardenis', 99, 1921, false, true, 2, 2, 1];

const zmogus = {
    vardas: 'Vardenis',
    pavarde: 'Pavardenis',
    amzius: 99,
    gimimoMetai: 1921,
    turiSuni: false,
    gyvenamosiosVietos: [
        {
            miestas: 'Vilnius',
            gatve: 'Gedimino pr.'
        },
        {
            miestas: 'Kaunas',
            gatve: 'Laisves al.'
        },
    ],
    tevai: {
        motina: {
            vardas: 'Onute',
            amzius: 50
        },
        tevas: {
            vardas: 'Petras',
            amzius: 55
        }
    }
}

console.log(zmogus);
console.log(zmogus['vardas']);
console.log(zmogus['gimimoMetai']);
console.log(zmogus.pavarde);
console.log(zmogus.amzius);

console.log('-----------------');

const auto = {
    marke: 'Tesla',
    modelis: '3',
    spalva: 'raudona',
    baterija: 100,
    sedyniu: 4
}

console.log(`Mano ${auto.marke} yra ${auto.spalva} ir turi ${auto.sedyniu} sedynes.`);

// zmogui priskiriame automobili

zmogus.automobilis = auto;

console.log(zmogus);
console.log(zmogus.automobilis.marke);
console.log(zmogus.tevai.motina.vardas);
console.log(zmogus.tevai.tevas.vardas);
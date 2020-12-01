/*
Suskaičiuoti, kiek nurodytame (imtinai) intervale yra skaičių, kurie dalijasi be liekanos
*/

const nuo = 0;
const iki = 1_100_000_000;
const daliklis = 14;

let kiekis = 0;

// logic
for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`);
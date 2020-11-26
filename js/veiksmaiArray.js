/*
pazymiai:
- vidurkis
- surasti ar turi konkretu skaiciu
- surasti min, max reiksme
- isrikiuoti (min, max)
*/

// skaiciuojame vidurki
const pazymiai = [10, 4, 8, 6, 2];

console.log(pazymiai);
console.log(pazymiai.length);

const sarasoSkaiciuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
const skaiciuKiekis = pazymiai.length;

const vidurkis = sarasoSkaiciuSuma / skaiciuKiekis;
console.log('Vidurkis:', vidurkis);



/*
zodynas
- sujungti reiksmes atgaline tvarka ir iterpti ", "
*/
const zodynas = ['Labas', 'rytas', 'Lietuva'];

console.log(zodynas);

const sakinys = zodynas[2] + ', ' + zodynas[1] + ', ' + zodynas[0];

console.log(sakinys);
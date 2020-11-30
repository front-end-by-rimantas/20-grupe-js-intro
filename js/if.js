/*
if - salygos funkcija

galimi palyginimo operatoriai: >, <, ==, !=, >=, <=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

funkciju uzrasymas:
if () {}
if () {} else {}
if () {} else if () {} else if () {} .... else if () {}
if () {} else if () {} else if () {} .... else if () {} else {}

*/

const a = 4;
const b = 2;

// ar a yra daugiau uz b?

if (a > b) {
    console.log('Taip, 4 yra daugiau uz 2.');
}

if (a < b) {
    console.log('A yra maziau uz B.');
} else {
    console.log('A nera maziau uz B.');
}

const duSkaiciai = [777, 612];

const pirmasSkaicius = duSkaiciai[0];
const antrasSkaicius = duSkaiciai[1];

if (pirmasSkaicius > antrasSkaicius) {
    const duSkaiciaiRez = `${pirmasSkaicius} yra daugiau uz ${antrasSkaicius}`;
    console.log(duSkaiciaiRez);
} else {
    console.log(`${pirmasSkaicius} nera daugiau uz ${antrasSkaicius}`);
}

console.log('--------------------');

const diena = 'pir';

if (diena === 'pir') {
    console.log('Pirmadienis.');
} else {
    if (diena === 'ant') {
        console.log('Antradienis.');
    } else {
        if (diena === 'tre') {
            console.log('Treciadienis.');
        } else {
            if (diena === 'ket') {
                console.log('Ketvirtadienis.');
            } else {
                if (diena === 'pen') {
                    console.log('Penktadienis.');
                } else {
                    if (diena === 'ses') {
                        console.log('Sestadienis.');
                    } else {
                        if (diena === 'sek') {
                            console.log('Sekmadienis.');
                        } else {
                            console.log('Panasu, jog ne savaites diena... 🤔');
                        }
                    }
                }
            }
        }
    }
}


const day = 'edgf';

if (day === 'mon') {
    console.log('Monday');
} else if (day === 'tue') {
    console.log('Tuesday');
} else if (day === 'wed') {
    console.log('Wednesday');
} else if (day === 'thu') {
    console.log('Thursday');
} else if (day === 'fri') {
    console.log('Friday');
} else if (day === 'sat') {
    console.log('Saturday');
} else if (day === 'sun') {
    console.log('Sunday');
} else {
    console.log('Not a week day... 🤔');
}

console.clear();

if (0 === false) {
    console.log('POzityvas');
} else {
    console.log('NEgatyvas');
}
/*
Ternary operator

liaudiskai: inline if'as, kuris savyje turi ir gali tureti TIK true ir false dalis.

if'o klausimas ? jeigu teigiamas ats : jeigu neigiamas ats
*/

console.log(4 === 2 ? 'Daugiau' : 'Ne daugiau');

const amziausRiba = 40;
const amzius1 = 9;
const amzius2 = 99;

const verdiktas1 = amzius1 >= amziausRiba ? 'I prezidentus!' : 'Dar palauk...';
const verdiktas2 = amzius2 >= amziausRiba ? 'I prezidentus!' : 'Dar palauk...';

console.log(`Jei tau ${amzius1} - ${verdiktas1}`);
console.log(`Jei tau ${amzius2} - ${verdiktas2}`);


const makesSense = false;
const ats = makesSense ? 'taip' : 'ne';

console.log(ats);


console.log('---------------');

const sezonas = 'ruduo';
const temp = 15;

if (sezonas === 'vasara') {
    if (temp > 10) {
        console.log('Maike');
    } else {
        console.log('Golfas');
    }
} else {
    if (temp > 10) {
        console.log('Megztinis');
    } else {
        console.log('Striuke');
    }
}


const kaVilktis = sezonas === 'vasara' ? temp > 10 ? 'Maike' : 'Golfas' : temp > 10 ? 'Megztinis' : 'Striuke';

// const kaVilktis = sezonas === 'vasara' ?
//                     temp > 10 ?
//                         'Maike' :
//                         'Golfas'
//                     : temp > 10 ?
//                         'Megztinis' :
//                         'Striuke';

console.log(kaVilktis);
/* Matematines operacijos */

// 2+2*2 = 6

const skaicius1 = 15;
const skaicius2 = 8;
const suma = skaicius1 + skaicius2;
console.log(skaicius1, '+', skaicius2, '=', suma);


const skaicius3 = 88;
const skaicius4 = 77;
const skirtumas = skaicius3 - skaicius4;
console.log(skaicius3, '-', skaicius4, '=', skirtumas);


const skirtumas2 = skaicius1 - skaicius2;
console.log(skaicius1, '-', skaicius2, '=', skirtumas2);


const sandauga = skaicius1 * skaicius2;
console.log(skaicius1, '*', skaicius2, '=', sandauga);


const dalmuo = skaicius1 / skaicius2;
console.log(skaicius1, '/', skaicius2, '=', dalmuo);



const PVM = 21;
const petroPajamos = 100;
const marytesPajamos = 200;

const petroMokesciai = petroPajamos * PVM / 100;
const marytesMokesciai = marytesPajamos * PVM / 100;

console.log('Mokesciai:', petroPajamos, '->', petroMokesciai);
console.log('Mokesciai:', marytesPajamos, '->', marytesMokesciai);

console.log('-----------------');

const zodis1 = 'Labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuva';

// Labas rytas, Lietuva.
// Labas!

const sakinys = zodis1 + ' ' + zodis2 + ', ' + zodis3 + '.';
const sakinys2 = zodis1 + '!';

console.log(sakinys);
console.log(sakinys2);

/* tekstu iniciavimo/rasymo subtilybes */

const txt1 = "Lorem";
const txt2 = 'ipsum';

// Sakinyje yra vienguba ' kabute.
// Sakinyje yra dviguba " kabute.

const txt3 = "Sakinyje yra vienguba ' kabute.";
const txt4 = 'Sakinyje yra dviguba " kabute.';
console.log(txt3);
console.log(txt4);

// Sakinyje yra vienguba ' kabute ir dviguba " kabute.

const txt5 = 'Sakinyje yra vienguba \' kabute ir dviguba \" kabute.';
const txt6 = "Sakinyje yra vienguba \' kabute ir dviguba \" kabute.";

console.log(txt5);
console.log(txt6);

/*
<div>
    <h1>JS rocks! 🐱‍🏍🚀✅</h1>
    <p>Lorem ipsum</p>
</div>
*/

const jsText = 'JS rocks!';
const emoji = '🐱‍🏍🚀✅';
const htmlText = 'Lorem ipsum';

const pilnasHTML = '<div>\
    <h1>' + jsText + ' ' + emoji + '</h1>\
    <p>' + htmlText + '</p>\
</div>';

console.log(pilnasHTML);

const backtickHTML = `<div>
    <h1>${jsText} ${emoji}</h1>
    <p>${htmlText}</p>
</div>`;

console.log(backtickHTML);
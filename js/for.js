const pajamos = [100, 200, 300, 100, 100, 0, 100];
let menuo = 0;
let pinigine = 0;

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);


console.log('-----------------');

for (let i = 0; i >= -5; i--) {
    console.log('Siuo metu i yra', i);
}

/*
i=0;  0 >= -5 -> log
i=-1;  -1 >= -5 -> log
i=-2;  -2 >= -5 -> log
i=-3;  -3 >= -5 -> log
i=-4;  -4 >= -5 -> log
i=-5;  -5 >= -5 -> log
i=-6;  -6 >= -5 BREAK


*/


/*
Suskaiciuoti pazymiu vidurki.
1) susumuoti pazymius
2) suma padalinti is pazymiu kiekio 
*/

const marks = [10, 2, 8, 4, 6, 1, 7, 9];

let sum = 0;
const count = marks.length;

for (let i = 0; i < count; i++) {
    const mark = marks[i];
    sum += mark;

    console.log(i + ')', mark, '->', sum);
}

const average = sum / count;

console.log(`Pazymiu vidurkis yra ${average}.`);


console.log('-----------------');

const txt = 'abcdef';
const firstLetter = txt[0];

console.log(firstLetter);
console.log(txt[1]);
console.log(txt[2]);
console.log(txt[3]);
console.log(txt[4]);
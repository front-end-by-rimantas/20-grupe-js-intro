/*
while() {}
proceduros atliekamos "tol-kol" tenkinama salyga/-os
*/

let i = 0;

while (i < 5) {
    console.log('labas');
    i++;
}


let m = 0;

for (; m < 5;) {
    console.log('rytas');
    m++;
}

console.log(m);



const pazymiai = [5, 10, 8, 7];
let sum = 0;
let pazymysIndex = 0;
const pazymiuKiekis = pazymiai.length;

while (pazymysIndex < pazymiuKiekis) {
    sum += pazymiai[pazymysIndex];
    pazymysIndex++;
}

console.log(sum);

let sumFor = 0;
for (let i = 0; i < pazymiai.length; i++) {
    sumFor += pazymiai[i];
}

console.log(sumFor);


console.log('---------------------');


/*
Sumuoti atsitiktini skaiciu tol kol gausim suma 10
*/

let randomSum = 0;
let randCount = 0;

while (randomSum < 10) {
    randCount++;
    randomSum += Math.random();
}
console.log(randCount, '-', randomSum);


let randomSumFor = 0;
let randCountFor = 0;

for (; randomSumFor < 10;) {
    randCountFor++;
    randomSumFor += Math.random();
}

console.log(randCountFor, '-', randomSumFor);
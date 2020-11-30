/*

Matematiniu operatiai:

2+2
2*8
4-7
16/2

*/

let pinigine = 0;
console.log(pinigine);

pinigine = pinigine + 100;  // 100
pinigine = pinigine - 20;   // 80
console.log(pinigine);

pinigine = pinigine + 100;  // 180
pinigine = pinigine - 20;   // 160
console.log(pinigine);

pinigine = pinigine + 100;  // 260
pinigine = pinigine - 20;   // 240
console.log(pinigine);

let pocket = 0;
console.log(pocket);

pocket += 100;  // 100
pocket -= 20;   // 80
console.log(pocket);

pocket += 100;  // 180
pocket -= 20;   // 160
console.log(pocket);

pocket += 100;  // 260
pocket -= 20;   // 240
console.log(pocket);

console.log('------------');
let ats = 100;
console.log(ats);

ats *= 10;
console.log(ats);

ats /= 5;
console.log(ats);

ats += 50;
console.log(ats);

ats -= 500;
console.log(ats);

console.log('---------------');

/*
++ padydinti vienu vienetu
-- sumazinti vienu vienetu
*/

let i = 0;
console.log(i);

i = i + 1;
i += 1;
i++;
console.log(i);

i = i - 1;
i -= 1;
i--;
console.log(i);


let temperatura = -8;

console.log(`Lauke dabar yra ${temperatura++} laipsniu.`);
console.log(`Lauke dabar yra ${temperatura} laipsniu.`);
const neapmokestinamasMinimumas = 500;
const PVM = 20;


const pajamos1 = [100, 500, 800, 5000, 15000];
let moketinaSuma1 = 0;
for (let i = 0; i < pajamos1.length; i++) {
    const uzdarbis = pajamos1[i];
    if (uzdarbis > neapmokestinamasMinimumas) {
        moketinaSuma1 += uzdarbis - neapmokestinamasMinimumas;
    }
}
const mokesciai1 = moketinaSuma1 * PVM / 100;
console.log('Pirmasis susimoka:', mokesciai1);



const pajamos2 = [100, 500, 200];
let moketinaSuma2 = 0;
for (let i = 0; i < pajamos2.length; i++) {
    const uzdarbis = pajamos2[i];
    if (uzdarbis > neapmokestinamasMinimumas) {
        moketinaSuma2 += uzdarbis - neapmokestinamasMinimumas;
    }
}
const mokesciai1 = moketinaSuma2 * PVM / 100;
console.log('Antrasis susimoka:', mokesciai2);



const pajamos3 = [10000, 10000, 10000, 10000, 10000, 10000];
let moketinaSuma3 = 0;
for (let i = 0; i < pajamos3.length; i++) {
    const uzdarbis = pajamos3[i];
    if (uzdarbis > neapmokestinamasMinimumas) {
        moketinaSuma3 += uzdarbis - neapmokestinamasMinimumas;
    }
}
const mokesciai1 = moketinaSuma3 * PVM / 100;
console.log('Treciasis susimoka:', mokesciai3);


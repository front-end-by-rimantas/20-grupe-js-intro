function mokesciai(pajamos) {
    const neapmokestinamasMinimumas = 500;
    const PVM = 20;
    let moketinaSuma = 0;

    for (let i = 0; i < pajamos.length; i++) {
        const uzdarbis = pajamos[i];

        if (uzdarbis > neapmokestinamasMinimumas) {
            moketinaSuma += uzdarbis - neapmokestinamasMinimumas;
        }
    }

    const mokestis = moketinaSuma * PVM / 100;

    return mokestis;
}


const asmens1uzdarbiai = [100, 500, 800, 5000, 15000];
const asmens1mokesciai = mokesciai(asmens1uzdarbiai);
console.log('Pirmasis susimoka:', asmens1mokesciai);

const asmens2uzdarbiai = [100, 500, 200];
const asmens2mokesciai = mokesciai(asmens2uzdarbiai);
console.log('Antrasis susimoka:', asmens2mokesciai);

const asmens3uzdarbiai = [10000, 10000, 10000, 10000, 10000, 10000];
const asmens3mokesciai = mokesciai(asmens3uzdarbiai);
console.log('Treciasis susimoka:', asmens3mokesciai);
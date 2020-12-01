function multiply(pirmas, antras) {
    console.log('Gauta reiksme:', pirmas);
    console.log('Gauta reiksme:', antras);

    const sandaugosRezultatas = pirmas * antras - 1;
    console.log('Sandauga:', sandaugosRezultatas);

    return sandaugosRezultatas;
}

const skaicius1 = 4;
const skaicius2 = 8;
const skaicius3 = -5;

const rez = multiply(skaicius1, skaicius2);
console.log('Grazintas rezultatas:', rez); // 32


// console.log(multiply(skaicius3, skaicius2)); // -40
// console.log(multiply(skaicius1, skaicius3)); // -20
// console.log(multiply(99, -11));
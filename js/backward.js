/*
Isvesti duota zodi is kito galo.
*/

const text = 'Labas!';
let backward = '';

// // Imame raides is galo ciklo metu
// for (let i = text.length - 1; i >= 0; i--) {
//     const letter = text[i];
//     backward += letter;

//     console.log(i, letter, backward);
// }

// console.log(text, '<-->', backward);


// // Ciklas eina is priekio, bet raides paimame is galo
// for (let i = 0; i < text.length; i++) {
//     const letter = text[text.length - 1 - i];
//     backward += letter;
// }

// console.log(backward);


// Ciklas eina is priekio, raides imame is priekio, bet statome jas irgi is priekio
for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    backward = letter + backward;
}

console.log(backward);
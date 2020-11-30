const darzove = 'morka';

switch (darzove) {
    case 'morka':
        console.log('Labai gerai tavo regejimui.');
        break;

    case 'bulve':
        console.log('Darzoniu "duona"?.. 🤔');
        break;

    case 'pomidoras':
        console.log('Storaraudonaskruostis');
        break;

    default:
        console.log('Neatitiko jokios zinomos darzoves.');
        break;
}



/*
KADA switch'e nereikia kas kiekvienu case naudoti break?

Kai uzdavinys yra apie darbo procesa ir dalimybe ji perrimti kazkuriame procese zingsnyje.
*/

/*
PROCESAS: rytinio gerimo gamyba.
- pasiimti puodeli
- isideti pagrindini ingredienta
- saldiklio pagal poreiki
- uzpilti vandens
- ismaisyti
- gerti
*/

const etapas = 'puodelis';

switch (etapas) {
    case 'puodelis':
        console.log('1) pasiimti puodeli;');

    case 'ingredienta':
        console.log('2) isideti pagrindini ingredienta;');

    case 'saldiklis':
        console.log('3) isideti saldiklio pagal poreiki');

    case 'vanduo':
        console.log('4) uzpilti vandens');

    case 'ismaisyti':
        console.log('5) ismaisyti ruosiama gerima');

    case 'gerti':
        console.log('6) galite gerti. Skanaus!');
        break;

    default:
        console.log('nezinomas proceso zingsnis');
}
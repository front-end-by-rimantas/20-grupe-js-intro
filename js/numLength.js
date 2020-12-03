function hasDot(text) {
    for (let letter of text) {
        if (letter === '.') {
            return true;
        }
    }
    return false;
}

function numLength(num) {
    // input validation
    if (typeof num !== 'number') {
        return 'ERROR: duotas ne skaicius.';
    }
    if (isNaN(num)) {
        return 'ERROR: skaicius turi buti tikras (ne NaN).'
    }
    if (!isFinite(num)) {
        return 'ERROR: skaicius turi buti tikras (ne Infinity).'
    }

    // logic
    let length = 0;
    const textNumber = '' + num;
    length = textNumber.length;

    // randame ar skaicius desimtainis
    if (num % 1 !== 0) {
        length--;
    }
    // if (hasDot(textNumber)) {
    //     length--;
    // }

    // randame minuso zenkla / neigiama skaiciu
    if (num < 0) {
        length--;
    }
    // if (textNumber[0] === '-') {
    //     length--;
    // }

    // return
    return length;
}


console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(undefined));
console.log(numLength());
console.log(numLength([]));
console.log(numLength([5]));
console.log(numLength([5, 5]));
console.log(numLength([5, 5, 9, 8]));
console.log(numLength(['5']));
console.log(numLength(['5', '5']));
console.log(numLength(['5', '5', '9', '8']));
console.log(numLength(['asd']));
console.log(numLength(['asd', 'asd']));
console.log(numLength(['asd', 'asd', 'asd', 'asd']));
console.log(numLength(numLength));
console.log(numLength(-Infinity));
console.log(numLength(Infinity));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(2 + 2 * 2), '->', 1);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(-3), '->', 1);
console.log(numLength(-3.1415), '->', 5);
console.log(numLength(100000000000000000000), '->', 21);

console.log('----------------');

console.log(numLength(10000000000000000000000000000000000000000000000000000000000), '->', 59);
console.log(numLength(10000000000000000000000000000000000000000000), '->', 44);
console.log(numLength(100000000000000000000000000000000), '->', 33);
console.log(numLength(1000000000000000000000), '->', 22);



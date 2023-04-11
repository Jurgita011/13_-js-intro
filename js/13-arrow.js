console.clear();

const pirmas = 7;
const antras = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

// anonimous function
const diff = function (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${diff(pirmas, antras)}`);

// arrow function (rodikline funkcija)
const div = (a, b) => {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${div(pirmas, antras)}`);

// jeigu logikos bloke yra TIK 1 salyga
// galima nerasyti: {return}
const multi = (a, b) => a * b;
console.log(`${pirmas} * ${antras} = ${multi(pirmas, antras)}`);

// jeigu parametru bloke yra TIK 1 parametras
// galima nerasyti: ()
const square = a => a * a;
console.log(`${pirmas} ** 2 = ${square(pirmas)}`);

console.log('--------------');

const hi = () => 'Labas!';
console.log(hi());

const student = name => `Hi, my name is ${name}!`;
console.log(student('Petras'));
console.log(student('Maryte'));
console.log(student('Eminem'));


console.log('--------------------');


function example() {
    return 'Example';
}

console.log(example());
console.log(example());



const sample = letter => `This is your sample: ${letter}`;

console.log(sample('A'));
console.log(sample('B'));
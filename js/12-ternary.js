console.clear();
/*
TERNARY - supaprastintas IF'as
klausimas ? jei gerai : jei blogai;
*/

let zodis = '';
const diena = 1;

if (diena === 1) {
    zodis = 'Pirmadienis';
} else {
    zodis = 'Tokios dienos nera';
}

console.log(zodis);

const word = diena === 1 ? 'Pirmadienis' : 'Tokios dienos nera';
console.log(word);

const amzius = 160;
const limitas = 18;

let zinute = '';

if (amzius >= limitas) {
    zinute = 'Viskas OK, uzeik';
} else {
    zinute = 'Palauk uz duru...';
}

console.log(zinute);

const message = amzius >= limitas ? 'Viskas OK, uzeik ' : 'Palauk uz duru...';
console.log(message);

const a = 1 > 2 ? 3 : 4;
console.log(a);

const b = 1 < 2 ? 3 : 4;
console.log(b);

const c = 1 === 2 ? 3 : 4;
console.log(c);

const d = 1 < 2 ? 3 : 4 < 5 ? 6 : 7;
console.log(d);

const e = 1 > 2 ? 3 : 4 < 5 ? 6 : 7;
console.log(e);

const f = 1 > 2 ? 3 : 4 > 5 ? 6 : 7;
console.log(f);

const gg = 1 < 2 ? 3 < 4 ? 5 : 6 : 7 < 8 ? 9 : 10;
console.log(gg);

/*
1 < 2
    ? 3
    : 4;
1 < 2 
    ? 3 < 4
        ? 5
        : 6
    : 7 < 8
        ? 9
        : 10;
1 > 2
    ? 3 
    : 4 < 5
        ? 6 
        : 7;
*/
console.clear();

// FOR (ciklu tevas)
console.log('>>> FOR:');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('-----');
for (let i = 0; i < 5; i += 2) {
    console.log(i);
}

console.log('-----');
for (let i = 0, j = 20; i < 10 && j > 0; i++, j -= 3) {
    console.log(i, j);
}

console.log('-----');
for (let i = 0; i < 5;) {
    console.log(i);
    i += 2;
}

console.log('-----');
let i = 0;
for (; i < 5;) {
    console.log(i);
    i++;
}

console.log('-----');
function arTesti(iteratorCount) {
    return iteratorCount < 5;
}

for (let i = 0; arTesti(i); i++) {
    console.log(i);
}

console.log('-----');
for (let i = 0; (n => n < 5)(i); i++) {
    console.log(i);
}

console.log('----- a)');
let a = 0;
for (; a < 5; a++) {
    console.log('>>', a);
}
console.log(a);

for (; a < 10; a++) {
    console.log('>>', a);
}
console.log(a);

console.clear();

const marks = [10, 2, 8, 4, 6];

// FOR
let forSum = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    forSum += mark;
}
console.log('for:', forSum);

// FOR-OF
let forOfSum = 0;
for (const mark of marks) {
    forOfSum += mark;
}
console.log('for-of:', forOfSum);

// WHILE
let whileSum = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    whileSum += mark;
    iWhile++;
}
console.log('while:', whileSum);

// DO-WHILE
let doWhileSum = 0;
let iDoWhile = 0;
do {
    const mark = marks[iDoWhile];
    doWhileSum += mark;
    iDoWhile++;
} while (iDoWhile < marks.length);
console.log('do-while:', doWhileSum);

// FOREACH
let forEachSum = 0;
marks.forEach((mark) => {
    forEachSum += mark;
});
console.log('foreach:', forEachSum);

// MAP - grazina analogiska masyva
const marks2x = [];
for (const mark of marks) {
    marks2x.push(mark * 2);
}
console.log(marks);
console.log(marks2x);

const marks2xMap = marks.map(m => m * 2);
console.log(marks2xMap);

// FILTER - palieka tik tai ko nori
const studentMarks = [10, 2, -7, 8, -5, 4, 6];
const filteredMarks = studentMarks
    .filter(mark => mark >= 1 && mark <= 10);
console.log(studentMarks);
console.log(filteredMarks);

// REDUCE - subendrinti rezultata pagal pateikta logika
const reducedSum = marks
    .reduce((sum, mark) => sum + mark);
console.log('reduce:', reducedSum);

const reducedSum2 = marks
    .reduce((sum, mark) => sum + mark, 0);
console.log('reduce2:', reducedSum2);


const reduce1 = [1, 2, 3, 4].reduce((t, n) => t + n);
// 1+2+3+4 = 10
console.log('1:', reduce1);

const reduce2 = [1, 2, 3, 4].reduce((t, n) => t + n, 0);
// 0+1+2+3+4 = 10
console.log('2:', reduce2);

const reduce3 = [1, 2, 3, 4].reduce((t, n) => t + n, 100);
// 100+1+2+3+4 = 110
console.log('3:', reduce3);

const reduce4 = [1, 2, 3, 4].reduce((t, n) => t + n, -100);
// -100+1+2+3+4 = -90
console.log('4:', reduce4);

const reduce5 = [1, 2, 3, 4].reduce((t, n) => t - n);
// 1-2-3-4 = -8
console.log('5:', reduce5);

const reduce6 = [1, 2, 3, 4].reduce((t, n) => t - n, 0);
// 0-1-2-3-4 = -10
console.log('6:', reduce6);

const reduce7 = [1, 2, 3, 4].reduce((t, n) => t - n, 100);
// 100-1-2-3-4 = 90
console.log('7:', reduce7);

const reduce8 = [1, 2, 3, 4].reduce((t, n) => t - n, -100);
// -100-1-2-3-4 = -110
console.log('8:', reduce8);

const reduce9 = [1, 2, 3, 4].reduce((t, n) => t * n, 10);
console.log('9:', reduce9);

const reduce10 = [1, 2, 3, 4].reduce((t, n) => t / n, 10);
console.log('10:', reduce10);

const reduce11 = [1, 2, 3, 4].reduce((t, n) => t % n, 10);
console.log('11:', reduce11);

// SORT
marks.sort();
console.log(marks);

marks.sort((a, b) => a - b);
console.log(marks);

marks.sort((a, b) => b - a);
console.log(marks);

console.clear();

// VIDURKIS
const pazymiai = [10, 2, 'Petras', true, 8, -7, [], {}, undefined, NaN, Infinity, -Infinity, 4, 6, Math.E, Math.PI, 3.14, null, 0];

const tikriPazymiai = pazymiai
    .filter(p => typeof p === 'number')
    .filter(p => p > 0)
    .filter(p => p <= 10)
    .filter(p => p % 1 === 0);

const vidurkis = tikriPazymiai
    .reduce((s, p) => s + p, 0) / tikriPazymiai.length;

console.log(tikriPazymiai);
console.log(vidurkis);

console.log('--------');

const reduce12 = [1, 2, 3, 4].reduce((t, n) => t % n, 10);  // suma lygi nuliui 
console.log('12:', reduce12);

console.clear();
/*
FOR - loop, ciklas
*/

const marks = [10, 2, 8, 4, 6];
const count = marks.length;

let sum = 0;
let index = 0;

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

const average = sum / count;
console.log('Vidurkis:', average);


// let i = 0;
// for (; ;) {
//     console.log(i++);
// }

console.log('START');

for (let i = 10; i < 15; i = i + 1) {
    console.log('darau...', i);
}

console.log('FINISH');

console.log('------------------');

//            0  1  2  3  4  5  6  7  8  9  10
const list = [9, 7, 1, 3, 5, 2, 4, 8, 6, 0];
let g = 0;

console.log(list[g++]);
console.log(list[g++]);
console.log(list[g++]);
console.log(list[g++]);

console.log('------------------');

for (let i = 0; i < list.length; ++i) {
    console.log(i, '->', list[i]);
}

console.log('------------------');

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let s = 0; s < students.length; s++) {
    console.log(`${s + 1}) ${students[s]}.`);
}

console.log('------------------');

for (let s = 0; s < students.length; s++) {
    if (s < students.length - 1) {
        console.log(`${s + 1}) ${students[s]};`);
    } else {
        console.log(`${s + 1}) ${students[s]}.`);
    }
}

const hi = 'labas';

for (let i = 0; i < hi.length; i++) {
    console.log(i, '->', hi[i]);
}
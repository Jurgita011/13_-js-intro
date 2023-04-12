console.clear();
/*
 trim- istrina is priekio ir galo tarpus
 marks -itraukia reiksme
 push- prijungia paskutini skaiciu
 unshift- prijungia paskutini skaiciu
 shift- pasalina pirma skaiciu is priekio
 pop- pasalina paskutini skaiciu is galo
 join','-sujungia skaiciu su kableliu ir tarpu
 reverse- sukeicia reiksme is galo i prieki
 */
const marks = [1];
console.log(marks);

marks.push(10);
marks.push(10);
marks.push(10);
console.log(marks);

marks.push(5);
console.log(marks);

marks.unshift(7);
console.log(marks);

marks.unshift(3);
console.log(marks);

marks.shift();
console.log(marks);

marks.pop();
console.log(marks);

console.log(marks.length);

console.log(marks.at(-1));
console.log(marks[-1]);


console.log(marks.includes(555));
console.log(marks.includes(7));
console.log(marks.indexOf(7));
console.log(marks.indexOf(10));

console.log(marks.join(', '));
console.log(marks.reverse());

console.clear();

const dic = ['geras', 'blogas', 'labas', 'rytas', 'acių'];
dic.sort();
console.log(dic);

const num = [10, 2, 8, 1, 14, 4, 23, 50, 6, 1000000];
num.sort();
console.log(num);

num.sort((a, b) => a - b);      // -n; 0; +n
console.log(num);

num.sort((a, b) => b - a);
console.log(num);

num.sort();
console.log(num);

console.clear();

const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 88,
    },
    {
        name: 'Jonas',
        age: 54,
    },
    {
        name: 'Ona',
        age: 67,
    },
];

console.log(students);

for (let s = 0; s < students.length; s++) {
    const student = students[s];
    console.log(student.name);
}

students.sort();
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

students.sort((a, b) => b.age - a.age);
console.log(students);

students.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
});
console.log(students);
console.clear();

const abc = ['a', 'b', 'c', 'd', 'e'];
const abc2 = abc;

console.log(abc);
console.log(abc2);

abc[0] = 'AAA';
console.log(abc);
console.log(abc2);

abc2[1] = 'BBB';
console.log(abc);
console.log(abc2);

let a = 7;
let b = a;

console.log(a, b);

a = 5;
console.log(a, b);

b = 88;
console.log(a, b);


const original = [10, 2, 8, 4, 6];
const copy = [];
const copy2 = [...original];   // spread

for (let i = 0; i < original.length; i++) {
    copy.push(original[i]);
}

console.log('O:', original);
console.log('C:', copy);
console.log('C2:', copy2);

original[0] = 10000;
console.log('O:', original);
console.log('C:', copy);
console.log('C2:', copy2);

copy[1] = 22222;
console.log('O:', original);
console.log('C:', copy);
console.log('C2:', copy2);

console.clear();

const car = {
    brand: 'Tesla',
    model: 'X',
    color: 'red',
};

const carCopy = { ...car };
console.log(car);
console.log(carCopy);

car.color = 'blue';
console.log(car);
console.log(carCopy);

const masiniukas = {};
const carKeys = Object.keys(car);

for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[i];
    masiniukas[key] = car[key];
}

console.log('--------');
console.log(car);
console.log(masiniukas);

masiniukas.model = 'S';
console.log(car);
console.log(masiniukas);

function suma(...numbers) {
    console.log(numbers);
}

console.log(suma(1));
console.log(suma(1, 2));
console.log(suma(1, 2, 3, 4));
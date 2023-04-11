console.clear();
/*
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// эквивалентно: (param1, param2, …, paramN) => { return expression; }

// Круглые скобки не обязательны для единственного параметра:
(singleParam) => { statements }
singleParam => { statements }

// Функция без параметров нуждается в круглых скобках:
() => { statements }
() => expression
// Эквивалентно: () => { return expression; }
// Когда возвращаете литеральное выражение объекта, заключите тело в скобки
params => ({foo: bar})

// Остаточные параметры и параметры по умолчанию поддерживаются
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Деструктуризация тоже поддерживается
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6

До появления стрелочных функций, каждая новая функция имела своё значение this 
    (новый объект в случае конструктора,  undefined в strict режиме вызова функции,
     контекст объекта при вызове функции как "метода объекта" и т.д.). 
     Это очень раздражало при использовании объектно-ориентированного стиля программирования.
     Так как значение this определяется лексикой,
      вызов стрелочных функций с помощью методов call() или apply(), даже если передать аргументы в эти методы, не влияет на значение this:



*/
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
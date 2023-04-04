console.clear();
/*
OBJECT - objejtas,   galima pritemti: setas , zodynas

objektai{}- zymina taip 

{key: value}

*/

const  emptyObject = {};
console.log( emptyObject);

const user ={                    
    name :'Petas',
    age: 99,
    IsMarried: true,
    'mano pazymiai':[10, 9 ,8]
   
};

console.log(user);

// Sveiki, as esu [vardenis]ir man yra [kazkiek] metu.

const sayHi=`Sveiki, as esu ${user['name']} ir man yra ${user['age']} metu.`
console.log(sayHi);

const sayHi2=`Sveiki, as esu ${user.name} ir man yra ${user.age} metu.`
console.log(sayHi2);
console.log(user.IsMarried);
console.log(user['mano pazymiai']);


console.log('-----------------------------');

const blynas = {};

console.log(blynas);
console.log(blynas.dydis);
console.log(blynas.spalva);

blynas.dydis =10
console.log(blynas.dydis);
console.log(blynas.spalva);

blynas.spalva ='red';
console.log(blynas);
console.log(blynas.dydis);
console.log(blynas.spalva);

console.log('-------------------------');

const marks =[10, 2, 8, 4, 6]
console.log( 'Pazymiai:',marks);
console.log('Antras', marks[1]);

marks[1]=5;
console.log('Pazymiai:',marks);
console.log('Antras', marks[1]);

a=['a'];
 a[0]='aaa';
console.log(a);

let gg ={
    goodGame:false,
}
console.log(gg);

gg.goodGame =true
console.log(gg);

 gg ={};
console.log(gg);


//const: number, strings. boolean   no no no 
//const: array , object    yes yes  


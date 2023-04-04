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

console.clear();

const person={
    non: 'grata',
    age: Infinity,
    name:'nesakysiu',
    luckyNumbers:[2 , 6, 13, 666, 74],

}

console.log(person);
console.log('Laimingu skaiciu kiekis:',person.luckyNumbers.length);
console.log('Pirmas laimingas skaicius:' , person.luckyNumbers[0]);

console.log('vardo ilgis:' ,person.name.length );

console.log([10, 2, 8].length );
console.log('asdasd'.length); //simboliu sarasas
console.log(['1', 'a', 'b'].length);

const abc={
    a:'Aa',
    b:'Bb',
    c: 'Cc',
 
}
console.log(abc);
console.log(abc.length);
 const abcKeys= Object.keys(abc);
 console.log(abcKeys);
 console.log(abcKeys.length);
 console.log(Object.keys(abc).length);
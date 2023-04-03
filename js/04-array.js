console.clear();
/*
ARRAY- sarasas , listas , masyvas , matrica,....

Array nariu kiekis: list.length arba array.lenght, [].length

tipine klaida ->[].lenght -> HT
*/ 

// Pazymiai
const p1 =10;
const p2 = 8;
const p3 = 4;
const p4 = 5;
const p5 = 7;
const p6 =10;
const p7 =8;

const vidurkis = (p1 + p2 + p3 + p4 +p5 +p6 + p7) /7
console.log('Vidurkis:', vidurkis);
//index/pozicija: 0  1   2  3  4   5  6  7
const pazymiai =[10, 2 , 8, 4, 6 , 7, 9, 3];
console.log(pazymiai);

const pirmasPazymys =pazymiai[0];
console.log(pirmasPazymys);

console.log( pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);
console.log(pazymiai[3]);
console.log(pazymiai[4]);
console.log(5,'->',pazymiai[5]);

console.log(1,2, '->', pazymiai[1,2,3]);

console.log('paskutinis:', pazymiai[7]);

console.log('pazymiu kiekis:', pazymiai.length);

console.log([].length);
console.log([1].length);
console.log([5,55].length);


// 1-> 0
//5 -> 4
// 8 -> 7
const paskutinioIndexas= pazymiai.length-1;
const  paskutinisPazymys = pazymiai[paskutinioIndexas];
console.log(paskutinioIndexas, '->', paskutinisPazymys);

const paskutinisPazymys2 =pazymiai[pazymiai.length-1];
console.log(paskutinisPazymys2);

console.log(pazymiai[3.14],'DIDELID NO NO NO!!!!!');


console.clear();
//                0         1          2        3     4
const students =['Jonas', 'Maryte', ' Jonas', 'Ona','Algis '];
console.log(students);

const student1= students[0];
console.log(student1);
const studentLast =students[students.length-1];
console.log( 'paskutinis studentas:', studentLast);

const mix = ['red', 777, 'blue', false,' green']
//          0        1    2      3    4    5
const  x= ['Petras', 7 ,'Jonas' , 8, 'Ona', 6];
const skolininkoNumeris = 3;
const skolininkoVardas = x[skolininkoNumeris * 2 - 2];
const skolininkoSkola = x[skolininkoNumeris * 2 - 1];
console.log(`${skolininkoNumeris})${skolininkoVardas} -${skolininkoSkola}`);

/*
1) Petras ->0
2) Jonas -> 2
3) Ona -> 4
*/
const skolininkai=['Petras',  ' Jonas', 'Ona'];
const skolos = [7,8,6];

const index = 1;
const asmuo = skolininkai[index-1];
const skola = skolos[index-1];
console.log(asmuo);
console.log(`${index})${asmuo}- ${skola}`);
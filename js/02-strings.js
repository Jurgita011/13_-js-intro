console.clear();

/*
STRINGS- simboliu sarasas/(junginys, tekstas (galbut  bet nebutinai )

 Kintamuju galimybes:
  -const( default)
  -let ( tik jei yra poreikis keisti reiksme)
  -var  (nenaudoti ! nebent zinome ka darome)

  String'o iniciavimas:
  -viengubos (') kabutes 
  -dvigubos (") kabutes
  -bactick (`)kabutes
*/
//kintamuju iniciavimas
const vardas =' Jurga';
console.log(vardas);

const keturi= 4;
console.log(keturi);

const keturiTekstu='4';
console.log(keturiTekstu);

const pinigine=0;
console.log(pinigine);

console.log('-------------------------');
//STRINGS
const firstname='Maryte'
console.log(firstname);

const lastname='Marytaite'
console.log(lastname);

// Labas rytas, Maryte!
console.log('Labas rytas,', firstname,'!');//netinkamas sprendimas

const pasisveikinimas='labas rytas,' + firstname + '!';
console.log(pasisveikinimas);

// Sveiki, mano vardas Jurga ir man 88 metai!
const name1 = 'Jurga';
const age1 = 88;

const prisistatymas ='Sveiki, mano vardas ' + name1 + ' ir man ' + age1 +' metai!' ;
console.log(prisistatymas);


const word1 = 'vasara'
const perPuse =word1 / 2; // number -> NAN (nesamone)
console.log(perPuse);
  
console.clear();

const x ='4'; //'4'-> 4  // '4a'-> NAN
const y = 5;

console.log(y+x);
console.log(x-y);
console.log(x/y);
console.log(y*x);

console.log(4+ 4);
console.log('4'+ 4);
console.log (4+ '4');
console.log('4'+ '4');

console.log(4 - 4);
console.log('4'- 4);
console.log (4 -'4');
console.log('4'- '4');

console.log(4 / 4);
console.log('4'/ 4);
console.log (4 /'4');
console.log('4'/ '4');

console.log(4 * 4);
console.log('4'* 4);
console.log (4 *'4');
console.log('4' *'4');

 console.clear();

//labas 
const s1 = 'Labas';
console.log(s1);

const s2 = 'L' + 'a' + 'b' + 'a' + 's';
console.log(s2);

const s3 = 'Labas'+ ' ' + 'rytas';
console.log(s3);

//skaiciai : teigiami ir neigiami
// variables: constant variables ir variables 

console.clear();


            // NAMU DARBAI

     //2 uzduotis : veiksmai su kintamaisias 

     const a = 14;
     const b = 5;
     const c = 3;
     console.log(a+b+c);

     // Su gimtadieniu, Arunai!
     const name ='Arunai';
     const sveikinimas ='Su gimtadieniu , ' + name + '!';
     console.log(sveikinimas);

     // 1 uzduotis: Kintamuju inicijavimas

     const d = 10;
     const e = 13;
     const f = 5;
     console.log(d);
     console.log(e);
     console.log(f);
    
   const a1 = 'sveikinu';
   const a2 = 'su';
   const a3 = 'Jurginemis';
   
   console.log(a1);
   console.log(a2);
   console.log(a3);

   console.clear();
    
   // Sveiki, Jurgi!
   const username1 ='Jurgi';
   const username2 = 'Monika';
   const username3 ='Jonas';
   const username4 = 'Ona';

   const hi1='Sveiki,' + username1 +'!';
   const hi2='Sveiki,' + username2 +'!';
   const hi3='Sveiki,' + username3 +'!';
   const hi4='Sveiki,' + username4 +'!';

   console.log(hi1);
   console.log(hi2);
   console.log(hi3);
   console.log(hi4);

   // vienguba (') kabute.
   const kabute1 = "vienguba (') kabute.";
   console.log(kabute1);

    // dviguba (") kabute.
    const kabute2 = 'dviguba(") kabute';
    console.log(kabute2);

    // vienguba (')  ir  dviguba (") kabutes.
    const kabute12 = "vienguba (') ir "  +'dviguba (") kabutes' ;
    console.log(kabute12);
    
    const kabute12_1 ="vienguba (\') ir "  +'dviguba (") kabutes';
    console.log( kabute12_1);

    const kabute12_2 ="vienguba (') ir "  +'dviguba (\") kabutes';
    console.log(kabute12_2);

    const kabute12_3 ="vienguba (\') ir 'dviguba (\") kabutes";
    console.log( kabute12_3);

    
   const kabute3 =`vienguba (') ir dviguba (") kabutes.`;
   console.log(kabute3);

   // kabutes :'"`.
   const kabutesAll1 = ' kabutes :\'"`';
   const kabutesAll2 = " kabutes :'\"`";
   const kabutesAll3 = ` kabutes :'"\``;

   console.log(kabutesAll1);
   console.log(kabutesAll2);
   console.log(kabutesAll3);

  /*
  <header>
        <img src="/logo.png" alt=" Logo">
        <nav>
            <a href="/">LINK</a>
            <a href="/">LINK</a>
            <a href="/">LINK</a>
        </nav>
  </header>
  */
  

const HTML = '<header>\n\
<img src="./logo.png" alt=" Logo">\n\
<nav>\n\
    <a href="/">LINK</a>\n\
    <a href="/">LINK</a>\n\
    <a href="/">LINK</a>\n\
</nav>\n\
</header>';
console.log(HTML);

/*
</header>>href="/>Link</a>t="Logo">
*/ 

 const HTML2 =`<header>
 <img src="./logo.png" alt=" Logo">
 <nav>
     <a href="/">LINK</a>
     <a href="/">LINK</a>
     <a href="/">LINK</a>
 </nav>
</header>`
console.log(HTML2);

// Yuor lucky number is 7 . Congz!

const userNumber =777;
console.log(`Yuor lucky number is ${userNumber} . Congz!`);

const vardenis= 'Petras';
const  amzius  = 100;
console.log(`Sveiki , mano vardas ${vardenis} ir man ${ amzius} metu`);

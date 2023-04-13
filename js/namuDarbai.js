//kintamuju palyginimas

const a= 5;
const b= 18;
if(a>b) {
    console.log('a>b');
} else{
    console.log('a nera  daugiau arba lygu uz b');
} 
const c= 10;
const d= 6;
if(c<d){
console.log('c<d');
} else {
     console.log('c nera  maziau arba lygu uz d');

}
if(b>=d){
    console.log('b>=d');
}else{
    console.log('b yra daugiau arba lygu uz d');
}
if(a>=c){
    console.log('a>=c');
}else{
    console.log('a yra maziau arba lygu uz c');
}
console.clear();

const zodis= 'pomidoras';
const zodis2= 'bankykite kita karta';
const ilgis= zodis.length; 
const ilgis2= zodis2.length;
console.log (ilgis);
console.log(ilgis2);

if(ilgis> ilgis2){
    console.log( 'taip yra didesnis');
}else if (ilgis===ilgis2){
    console.log('ilgiai yra lygus');
}else {
    console.log('yra mazesnis');
}
   


// dede 100 teta 20

//a>b
//b<a

//--------------------

function sudetis (nuo, iki) {
    let sum = 0;
        for (let i = nuo; i <= iki; i++) {
            sum += i
        }
        console.log(sum)
    }
    
    console.log(sudetis(0,0));
    console.log(sudetis(0,4));
    console.log(sudetis(574,815));
    console.log(sudetis(-50,50));
    console.log(sudetis(-70,30));


    const stringas = 'abcderf';

    for (let i = stringas.length; i >= 0; i--) {
        console.log(stringas[i])
    }
    


    function dalmuo (nuo, iki, dalyba) {
        let suma = [];
        for (let i = nuo; i <= iki; i++) {
        if (i % dalyba ===0) {
            suma.push(i)
        }
    }
    console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${dalyba} yra ${suma.length} vienetai.`)
    }
    
    console.log(dalmuo(0, 11, 3));
    console.log(dalmuo(0, 11, 5));
    console.log(dalmuo(0, 11, 7));
    
    console.log(dalmuo(8, 31, 3));
    console.log(dalmuo(8, 31, 5));
    console.log(dalmuo(8, 31, 7));
    
    console.log(dalmuo(-18, 18, 3));
    console.log(dalmuo(-18, 18, 5));
    console.log(dalmuo(-18, 18, 7));

    console.log('-- -- --');

let a1 =0;
let g =0;
function skaitmenuKiekisSkaiciuje(a1) {
    if (typeof a1 !== 'number' || isNaN(a1)) {
        g = `Pateikta netinkamo tipo reikšmė.`;
    } else {
        g = a.toString().length;   
    }
    return g;
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));


console.clear();

function isrinktiRaides(tekstas, raide) {
    if (typeof tekstas !== 'string') {      // b. patikrinti, ar pirmasis kintamasis yra teksto tipo, jei ne...
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    } else if (tekstas.length === 0 && tekstas.length < 100) {     // c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių, jei ne...
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    } else if (typeof raide !== 'number' && !isFinite(raide)) {      // d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo, jei ne...
        return 'Antrasis kintamasis yra netinkamo tipo.'; 
    } else if (raide <= 0) {     // e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį, jei ne...
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    } else if (raide > tekstas.length) { //     f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    } else {        // g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
        let raides = '';
        for (i = raide - 1; i < tekstas.length; i = i + raide) {
            raides = raides + tekstas[i]; // h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
        }
        return raides;
    }
}

console.log(isrinktiRaides('abcdefg', 2)); // rezultatas: “bdf”
console.log(isrinktiRaides('abcdefghijkl', 3)); // rezultatas: “cfil”
console.log(isrinktiRaides('abc', 0)); // “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(isrinktiRaides('abc', 4)); // “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(isrinktiRaides(1561, 2)); // “Pirmasis kintamasis yra netinkamo tipo.”

function dalyba(a,b){
    if(typeof a ==='number'||isFinite(a)){
        return'pirmasis kintamasis yra netinkamo tipo';
    }else if(typeof b ==='number'||isFinite(b));
    return 'antrasis kintamasis yra netinkamo tipo';
}
console.log(dalyba('be',3));
console.clear();
/*
IF - sąlygos sakinys, palyginimas

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, !=, ===, !==                   > - daugiau;  < - maziau;
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

Loginiai operatoriai:
AND &&
OR ||

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/

const a = 5;
const b = 5;

console.log('1) Tik IF');
console.log('--------------');
if (a > b) {
    console.log(`${a} yra daugiau uz ${b}`);
}

if (a < b) {
    console.log(`${a} yra maziau uz ${b}`);
}

console.log('');
console.log('2) IF-ELSE');
console.log('--------------');
if (a > b) {
    console.log(`${a} yra daugiau uz ${b}`);
} else {
    console.log(`${a} nera daugiau uz ${b}`);
}

if (a < b) {
    console.log(`${a} yra maziau uz ${b}`);
} else {
    console.log(`${a} nera maziau uz ${b}`);
}

if (a >= b) {
    console.log(`${a} yra daugiau arba lygu uz ${b}`);
} else {
    console.log(`${a} yra maziau uz ${b}`);
}

if (a <= b) {
    console.log(`${a} yra maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} yra daugiau uz ${b}`);
}

console.log('');
console.log('3) ELSE-IF');
console.log('--------------');

const diena = 3.14;

if (diena == 1) {
    console.log('A) Pirmadienis');
} else if (diena == 2) {
    console.log('A) Antradienis');
} else if (diena == 3) {
    console.log('A) Treciadienis');
} else if (diena == 4) {
    console.log('A) Ketvirtadienis');
} else if (diena == 5) {
    console.log('A) Penktadienis');
} else if (diena == 6) {
    console.log('A) Sestadienis');
} else if (diena == 7) {
    console.log('A) Sekmadienis');
} else {
    console.log('A) Tokios dienos savaiteje nera.');
}

if (diena < 1) {
    console.log('B) Tokios dienos savaiteje nera.');
}

if (diena == 1) {
    console.log('B) Pirmadienis');
}

if (diena == 2) {
    console.log('B) Antradienis');
}

if (diena == 3) {
    console.log('B) Treciadienis');
}

if (diena == 4) {
    console.log('B) Ketvirtadienis');
}

if (diena == 5) {
    console.log('B) Penktadienis');
}

if (diena == 6) {
    console.log('B) Sestadienis');
}

if (diena == 7) {
    console.log('B) Sekmadienis');
}

if (diena > 7) {
    console.log('B) Tokios dienos savaiteje nera.');
}

console.log('FIN...');
console.clear();

// string number
// string boolean
// number boolean

const c = 1;
const d = true; // true -> 1; false -> 0

if (c == d) {
    console.log('Lygu');
} else {
    console.log('Ne lygu');
}

const e = 'aab';
const f = 'aac';

if (e > f) {
    console.log('Daugiau');
} else {
    console.log('Maziau arba lygu');
}

console.clear();

if (7 === '7') {
    console.log('Lygu');
} else {
    console.log('Ne lygu');
}

if (7 !== '7') {
    console.log('Ne lygu');
} else {
    console.log('Lygu');
}

// #################################################
// #################################################
// #################################################
// #################################################
console.clear();

// Code nesting

const day = 5;

if (day === 1) {
    console.log('Pirmadienis');
} else {
    if (day === 2) {
        console.log('Antradienis');
    } else {
        if (day === 3) {
            console.log('Treciadienis');
        } else {
            if (day === 4) {
                console.log('Ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('Penktadienis');
                } else {
                    if (day === 6) {
                        console.log('Sestadienis');
                    } else {
                        if (day === 7) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokia diena savaiteje neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}


const size = 'dydelis';
const type = 'be stogu';

if (size === 'dydelis') {
    if (type === 'su stogu') {
        console.log('Turiu dideli sedana ');
    } else {
        console.log('Turiu dideli kabrioleta ');
    }
} else {
    if (type === 'su stogu') {
        console.log('Turiu maza mini cooperi ');
    } else {
        console.log('Mano vaikas turi zaistini mobiliuka ');
    }
}

const arLyja = true;
const arDiena = true;
const arSilta = true;

if (arLyja === true) {
    if (arDiena === true) {
        console.log('A) Pasiimk sketi');
    } else {
        console.log('A) Pasiimk sketi ir zibintuveli');
    }
} else {
    if (arDiena === true) {
        console.log('A) Grazus oras');
    } else {
        console.log('A) Varom zvaigzdiu paskaiciuoti');
    }
}

if (arLyja === true && arDiena === true) {
    console.log('B) Pasiimk sketi');
}

if (arLyja === true && arDiena === false) {
    console.log('B) Pasiimk sketi ir zibintuveli');
}

if (arLyja === false && arDiena === true) {
    console.log('B) Grazus oras');
}

if (arLyja === false && arDiena === false) {
    console.log('B) Varom zvaigzdiu paskaiciuoti');
}

// ar silta

if (arLyja === false && arDiena === false && arSilta === true) {
    console.log('B) Varom zvaigzdiu paskaiciuoti');
}

if (arLyja === false && arDiena === false && arSilta === false) {
    console.log('B) Varom zvaigzdiu paskaiciuoti');
}


console.clear();
// LOGINIAI

if (7 === 5 || 4 === 5) {
    console.log('TAIP');
} else {
    console.log('NE');
}

// I pasimatyma eisiu: jeigu aukstas, jeigu grazus, jeigu blaivas.
// if (ausktas && grazus && blaivas) {}

// I pasimatyma eisiu: jeigu aukstas arba grazus arba blaivas.
// if (ausktas || grazus || blaivas) {}

// I pasimatyma eisiu: jeigu aukstas ir grazus ir arba blaivas.
// I pasimatyma eisiu: jeigu aukstas ir (grazus arba blaivas).
// I pasimatyma eisiu: jeigu (aukstas ir grazus) ir arba blaivas.
// if (ausktas || grazus || blaivas) {}

// aukstas === true
// true === true
// true

// aukstas === true
// false === true
// false

const aukstas = true;
const grazus = true;
const blaivas = false;

if ((aukstas || grazus) && blaivas) {
    console.log('I pasimatyma');
} else {
    console.log('Lieku namie');
}

// !true = false
// !false = true

// !!true = true
// !!false = false

if (!grazus) {
    console.log('Grazus');
} else {
    console.log('Ne itin grazus');
}

const r = 8;
const p = -r;
const o = !r;
const u = !0;
const t = !-5;
console.log(r, p, o, u, t);
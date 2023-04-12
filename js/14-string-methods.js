console.clear();

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Строки полезны для хранения данных, которые можно представить в текстовой форме. 
Некоторые из наиболее частых операций со строками — это проверка их длины, 
построение строки с помощью операций строковой конкатенации + и +=,
 проверка на существование или местоположение подстрок с помощью метода indexOf(), 
 либо извлечение подстрок с помощью метода substring().

 Метод [@@iterator]() возвращает новый объект итератора Iterator, 
 который проходит по кодовым точкам строкового значения, 
 возвращая каждую кодовую точку в виде строкового значения.

 Метод charAt() возвращает указанный символ из строки.

 The at() method takes an integer value and returns a new String 
 consisting of the single UTF-16 code unit located at the specified offset.
  This method allows for positive and negative integers. 
  Negative integers count back from the last string character.

  'ABC'.charCodeAt(0); // вернёт 65

  str.codePointAt(pos)---pos
Позиция элемента в строке, чья кодовая точка возвращается функцией.

Метод concat() объединяет текст из двух или более строк и возвращает новую строку.-- str.concat(string2, string3[, ..., stringN])

Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false.


*/


const str = 'Pomidoras';

console.log(str.charAt(0), '; ', str[0]);
console.log(str.charAt(1), '; ', str[1]);
console.log(str.charAt(2), '; ', str[2]);
console.log(str.charAt(20), '; ', str[20]);         // "", ''

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));

console.log('a' > 'b', '->', 'a'.charCodeAt(0), 'b'.charCodeAt(0));

console.log('---------------');

const w1 = 'Labas';
const w2 = 'rytas';

const w12 = w1.concat(w2);
console.log(w12, w1 + w2);

const w123 = w1.concat(' ', w2);
console.log(w123, w1 + ' ' + w2);

const w1234 = w1.concat(' ', w2, '!');
console.log(w1234, w1 + ' ' + w2 + '!');
console.log(w1234, `${w1} ${w2}!`);

console.log('---------------');

const kaTu = 'Ka tu?';

const arSaukiamasis = kaTu.endsWith('!');
console.log('saukiamasis:', arSaukiamasis);

const arPaprastas = kaTu.endsWith('.');
console.log('paprastas:', arPaprastas);

const arKlausiamasis = kaTu.endsWith('?');
console.log('klausiamasis:', arKlausiamasis);

console.log('---------------');

console.log('Pomidoras'.includes('p'));
console.log('Pomidoras'.includes('P'));

const kurIeskau = 'Pomidoras';
const koIeskau = 'p';

console.log(kurIeskau.includes(koIeskau));

function arYraTekste(tekstas, raide) {
    for (let i = 0; i < tekstas.length; i++) {
        console.log('>>', tekstas[i], tekstas[i] === raide ? true : false);
        if (tekstas[i] === raide) {
            return true;
        }
    }
    return false;
}

function arYraTekste2(tekstas, raide) {
    let arRadau = false;

    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] === raide) {
            arRadau = true;
            break;
        }
        console.log('>>', tekstas[i], arRadau);
    }

    return arRadau;
}

// console.log('>>', arYraTekste(kurIeskau, 'p'));
console.log('>>', arYraTekste2(kurIeskau, 'm'));

console.log('---------------');

console.log('PoMiDoRaS'.toLowerCase());
console.log('PoMiDoRaS'.toUpperCase());

console.log('PoMiDoRaS'.indexOf('o'));
console.log('PoMiDoRaS'.indexOf('MiDo'));
console.log('PoMiDoRaS'.indexOf('xxx'));

console.log('PoMiDoRaS'.repeat(5));

const pakeisti = 'PoMiDoRaS'.replace('M', 'm')
    .replace('D', 'd')
    .replace('R', 'r')
    .replace('S', 's');
console.log(pakeisti);

console.log('AAAAAAA'.replace('A', 'a'));
console.log('AAAAAAA'.replaceAll('A', 'a'));

console.clear();

//           012345678 
console.log('Pomidoras'.slice(2, 5));
console.log('Pomidoras'.slice(5));
console.log('Pomidoras'.slice(0, 'Pomidoras'.length - 1));
console.log('Pomidoras'.slice(0, -3));
console.log('Pomidoras'.slice(-3));

const k = 'Pomidoras';

const ras3_1 = k.slice(-3) + k.slice(-3) + k.slice(-3);
console.log(ras3_1);

const ras3_2 = k.slice(-3).repeat(3);
console.log(ras3_2);

const raides3 = k.slice(-3);
const ras3_3 = raides3 + raides3 + raides3;
console.log(ras3_3);

console.log('---------');

console.log('Pomidoras'.trim());
console.log('    Pomidoras'.trim());
console.log('    Pomidoras    '.trim());
console.log('    Pomi     doras    '.trim());
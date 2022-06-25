// "use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// {
//     var result = 50;
// }

// console.log(result);

// alert(5);
// [].push('a');

// const vehicleBodyWidth = 5000,
//       vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// ['sasha', 'masha', 'dasha'].map(a => )

// Reguest
// data
// response

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

// let COLOR_RED = '#f00';

// "use strict";

// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const persone = `5`;

// const bool = false;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.isMarried);


// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr);

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def:{

//         }
//     }
// };
// const b = 'b';

// arrObj.b = '1234';
// arrObj[b] = [];

// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2};
// const obj = {
//        Anna: 500,
//        'Alice': 800
// };

// "use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// "use strict";

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Nik";

// alert(`привет, ${user}`);

// "use strict";

// console.log('arr' + " - object");
// console.log(4  +"5");

// let incr = 10,
//     decr = 10;

//     // incr++;
//     // decr--;

//     console.log(++incr);
//     console.log(--decr);

//     console.log(5%2);

//     console.log(2 + 2 * 2 != '6');

//     const isChecked = false,
//           isClose = false;

//           console.log(isChecked || !isClose);

// "use strict";

// if (1) {
//     console.log('ok!');
// } else {
// console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = '50';

// switch (num) {
//    case '49': 
//      console.log('Неверно');
//      break;
//    case '100':
//      console.log('Неверно');
//      break;
//    case '50':
//     console.log('В точку!');
//     break;
//    default:
//     console.log('Не в этот раз');
//     break;
// }

// "use strict";

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));


// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'yoooyooo');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);

// "use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//     // break;
//     continue;
//    }
//    console.log(i);
// }

// "use strict";

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// "use strict";

// Место для первой задачи
// function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);
    
    // Не трогаем
//     return result;
// }

// Место для второй задачи
// function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    // const data = [5, 10, 'Shopping', 20, 'Homework'];

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// "use strict";

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//      let num = 10;
//      console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
// console.log("Hello");
// };

// logger();

// const calc = (a, b) =>  {
//     console.log('1');
//     return a + b;
// };

// "use strict";

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// "use strict";

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

// "use strict";

// Место для первой задачи
// function sayHello(name) {
//     return `Привет, ${name}!`;
//     }
//     sayHello('Alex');
    
    // Место для второй задачи
    // function returnNeighboringNumbers(num) {
    //     return [num - 1, num,num + 1];
    // }
    // returnNeighboringNumbers(5);
    // Место для третьей задачи
    // function getMathResult(num,times) {
    //     if (typeof(times) !== 'number' || times <= 0) {
    //         return num;
    //     }
    // let str = '';
    // for (let i = 1; i <= times; i++) {
    //     if (i === times) {
    //         str += `${num * i}`;
    //     } else {
    //         str += `${num * i}---`;
    //     }
    // }
    // return str;
    // }

    // "use strict";

    // const str = "teSt";
    // const arr = [1, 2, 4];

    // console.log(str[2] = 'd');

    // console.log(str.toUpperCase());
    // console.log(str.toLowerCase());
    // console.log(str);

//    const fruit = "Some fruit";

//    console.log(fruit.indexOf("fruit"));

//    const logg = "Hello world";

//    console.log(logg.slice(6, 11));

//    console.log(logg.substring(6, 11));

//    console.log(logg.substr(6, 5));

//    const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

"use strict";



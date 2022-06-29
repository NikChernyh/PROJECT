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

// "use strict";

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// "use strict";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border,bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);

// "use strict";

// const arr = [2, 3, 6, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
// console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// "use strict";

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// newNumbers.b = 12;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c',];
// const newArray = oldArray.slice();

// newArray[1] = 'xylxylxyl';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);      

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// "use strict";


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `;
//     });

//     return str;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
    // Самый оптимальный вариант решения
    // return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

// "use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier); ***

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;  устаревший код

// Object.setPrototypeOf(jonh, soldier); ***

// console.log(jonh.armor);
// jonh.sayHello();

// "use strict";

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// sortStudentsByGroups(students);

"use strict";
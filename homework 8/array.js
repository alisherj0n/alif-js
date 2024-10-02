/* ========== Cоздание массивов ============== */

// ========== Первый — использовать конструктор Array:
// let colors = new Array();
// console.log(colors);


// ========== Передать элементы
// let colors = new Array("red", "blue", "green");
// console.log(colors);


// ========== Разные параметры
// let colors = new Array(3); // массив с тремя элементами
// let names = new Array("Greg"); // массив с одним элементом, строкой "Greg"
// console.log(colors);
// console.log(names);


// ========== Опустить оператор new
// let colors = Array(3); // массив с тремя элементами
// let names = Array("Greg"); // массив с одним элементом, строкой "Greg"


// ========== Второй — использовать нотацию литерала массива
// let colors = ["red", "blue", "green"]; // массив с тремя строками
// let names = []; // пустой массив
// let values = [1,2,]; // массив с двумя элементами
// console.log(colors);
// console.log(names);
// console.log(values);


// ========== Два дополнительных статических метода
// const letters = Array.from("Matt")
// console.log(letters)

// const m = new Map()
// .set(1, 2)
// .set(3, 4);

// const s = new Set()
// .add(1)
// .add(2)
// .add(3)
// .add(4);

// const mapArray = Array.from(m);
// const setArray = Array.from(s);
// console.log(mapArray);
// console.log(setArray);


// ========== Поверхностное копирование
// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(a1);
// console.log(a1); // [1, 2, 3, 4]
// console.log(a1 === a2); // false


// ========== Может быть использован любой итерируемый объект
// const iter = {
//     *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//  }
// };
// console.log(Array.from(iter));


// ========== Объект arguments теперь может быть легко преобразован в массив:
// function getArgsArray() {
//     return Array.from(arguments);
// }
// console.log(getArgsArray(1, 2, 3, 4));


// ========== Пользовательский объект с необходимыми свойствами
// const arrayLikeObject = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     length: 4
// };
// console.log(Array.from(arrayLikeObject));


// ========== Второй необязательный аргумент функции map()
// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(a1, x => x ** 2);
// const a3 = Array.from(a1, function(x) { return x ** this.exponent }, { exponent: 2});
// console.log(a2); // [1, 4, 9, 16]
// console.log(a3); // [1, 4, 9, 16]


// ========== Array.of() преобразует список аргументов в массив
// console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// console.log(Array.of(undefined));  // [undefined]



/* ========== Дыры в массивах ============== */

// const options = [,,,,,]; // Создание массива с 5 элементами
// console.log(options.length); // 5
// console.log(options); // [,,,,,]


// const options = [1,,,,5];
// for (const option of options) {
//     console.log(option === undefined);
// }


// const a = Array.from([,,,]); // Массив из 3 дыр, созданный с помощью Array.from() в ES6

// for (const val of a) {
//     console.log(val === undefined);
// }


// console.log(Array.of(...[,,,])); // [undefined, undefined, undefined]


// const options = [1,,,,5];
// for (const [index, value] of options.entries()) {
//     console.log(value);
// }


// const options = [1,,,,5];
// console.log(options.map(() => 6)); // map() пропустит дыры целиком [6, undefined, undefined, undefined, 6]
// console.log(options.join('-')); // join() воспринимает дыры как пустые строки "1----5"


/* ========== Индексирование и идентификация в массивы  ============== */

// let colors = ["red", "blue", "green"]; // объявить массив строк
// console.log(colors[0]); // вывести первый элемент
// console.log(colors.at(0)); // вывести первый элемент
// colors[2] = "black"; // изменить третий элемент
// colors[3] = "brown"; // добавить четвертый элемент


// let colors = []; // объявить пустой массив
// colors[0] = "red"; // задавать значение
// colors["blue"] = "blue"; // задавать значение

// console.log(colors.length);		// 1
// console.log(colors["blue"]);	// blue
// console.log(colors.blue);		// blue


// let colors = []; // объявить пустой массив
// colors["13"] = "red"; // задавать значение
// console.log(colors.length); // 14
// console.log(colors);


// let colors = ["red", "blue", "green"];
// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }


// let colors = ["red", "blue", "green"];
// for(let color of colors) {
//     console.log(color);
// }


// ========== Cвойстве length

// let colors = ["red", "blue", "green"]; // массив с тремя строками
// let names = []; // пустой массив
// console.log(colors.length); // 3
// console.log(names.length); // 0


// let colors = ["red", "blue", "green"]; // массив с тремя строками
// colors.length = 2;
// console.log(colors[2]); // undefined


// let colors = ["red", "blue", "green"]; // массив с тремя строками
// colors.length = 10;
// console.log(colors[3]); // undefined


// let colors = ["red", "blue", "green"]; // массив с тремя строками
// colors[colors.length] = "black"; // добавление черного цвета в позиции 3
// colors[colors.length] = "brown"; // добавление коричневого цвета в позиции 4


// let colors = ["red", "blue", "green"]; // массив с тремя строками
// colors[99] = "black"; // добавление черного цвета в позиции 99
// console.log(colors.length); // 100

// ========== Идентификация

// if (value instanceof Array) {
//     // какие-то действия с массивом
// }

// if (Array.isArray(value)) {
//     // какие-то действия с массивом
// }



/* ========== Методы итераторов  ============== */

// const a = ["foo", "bar", "baz", "qux"];
// const aKeys = Array.from(a.keys());
// const aValues = Array.from(a.values());
// const aEntries = Array.from(a.entries());
// console.log(aKeys); // [0, 1, 2, 3]
// console.log(aValues); // ["foo", "bar", "baz", "qux"]
// console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

// const a = ["foo", "bar", "baz", "qux"];
// for (const [idx, element] of a.entries()) {
//     console.log(idx);
//     console.log(element);
// }   



/* ========== Методы копирования и заполнения ============== */

// const zeroes = [0, 0, 0, 0, 0];
// zeroes.fill(5);
// console.log(zeroes); // [5, 5, 5, 5, 5]


// const zeroes = [0, 0, 0, 0, 0];
// zeroes.fill(6, 3);
// console.log(zeroes); // [0, 0, 0, 6, 6]


// const zeroes = [0, 0, 0, 0, 0];
// zeroes.fill(7, 1, 3);
// console.log(zeroes); // [0, 7, 7, 0, 0];


// ========== Границы массива
// const zeroes = [0, 0, 0, 0, 0];
// zeroes.fill(1, 10, 15);
// console.log(zeroes); // [0, 0, 0, 0, 0]

// const numbers = [1, 2, 3, 4, 5]
// numbers.copyWithin(0, 3);
// console.log(numbers); // [4, 5, 3, 4, 5]


// const numbers = [1, 2, 3, 4, 5]
// numbers.copyWithin(0, 3, 4);
// console.log(numbers); // [4, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5]
// numbers.with(0, 4);
// console.log(numbers); // [4, 2, 3, 4, 5]



/* ========== Методы преобразования массивов ============== */

// let colors = ["red", "blue", "green"]; // массив с тремя строками
// console.log(colors.toString()); // red,blue,green
// console.log(colors.valueOf()); // red,blue,green

// let colors = []; // пустой массив
// console.log(colors.toString()); // ''
// console.log(colors.valueOf()); // []

// let colors = ["red", "green", "blue"];
// console.log(colors.join(",")); // red,green,blue
// console.log(colors.join()); // red,green,blue
// console.log(colors.join("||")); // red||green||blue



/* ========== Методы для работы с массивом как со стеком ============== */

// let colors = new Array(); // создание массива
// let count = colors.push("red", "green"); // включение двух элементов
// console.log(count); // 2
// count = colors.push("black"); // включение еще одного элемента
// console.log(count); // 3
// let item = colors.pop(); // извлечение последнего элемента
// console.log(item); // "black"
// console.log(colors.length);

/* ========== Методы для работы с массивом как с очередью ============== */

// let colors = new Array(); // создание массива
// let count = colors.push("red", "green"); // добавление двух элементов
// console.log(count); // 2
// count = colors.push("black"); // добавление еще одного элемента
// console.log(count); // 3
// let item = colors.shift(); // извлечение первого элемента
// console.log(item); // "red"
// console.log(colors.length); // 2


// ========== unshift()
// let colors = new Array(); // создание массива
// let count = colors.unshift("red", "green"); // добавление элементов
// console.log(count); // 2
// count = colors.unshift("black"); // добавление еще одного элемента
// console.log(count); // 3



/* ========== Методы изменения порядка следования элементов ============== */

// let values = [1, 2, 3, 4, 5];
// values.reverse();
// console.log(values); // 5,4,3,2,1

// const values = [1, 2, 3];
// const reversedValues = values.toReversed();
// console.log(reversedValues); // [3, 2, 1]
// console.log(values); // [1, 2, 3]


// let values = [0, 5, 1, 10, 15];
// values.sort();
// console.log(values); // 0,1,10,15,5


// function compare(value1, value2) {
//     if (value1 < value2) {
//         return -1;
//     } else if (value1 > value2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let values = [0, 5, 1, 10, 15];
// values.sort(compare);
// console.log(values); // 0,1,5,10,15


// function compare(value1, value2) {
//     if (value1 < value2) {
//         return 1;
//     } else if (value1 > value2) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// let values = [0, 1, 5, 10, 15];
// values.sort(compare);
// alert(values); //15,10,5,1,0


// function compare(value1, value2) {
//     return value2 - value1;
// }


// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]

/* ========== Методы манипулирования элементами ============== */

// let colors = ["red", "green", "blue"];
// let colors2 = colors.concat("yellow", ["black", "brown"]);
// console.log(colors); // red,green,blue
// console.log(colors2); // red,green,blue,yellow,black,brown


// ========== Symbol.isConcatSpreadable

// let colors = ["red", "green", "blue"];
// let newColors = ["black", "brown"];
// newColors[Symbol.isConcatSpreadable] = false;
// let colors2 = colors.concat("yellow", newColors);
// console.log(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"]]


// let moreNewColors = {
//     [Symbol.isConcatSpreadable]: true,
//     length: 2,
//     0: "pink",
//     1: "cyan"
// };
// let colors3 = colors.concat(moreNewColors);
// console.log(colors3); // ["red", "green", "blue", "pink, "cyan"]



// ========== slice()
// let colors = ["red", "green", "blue", "yellow", "purple"];
// let colors2 = colors.slice(1);
// let colors3 = colors.slice(1,4);
// console.log(colors2); // green,blue,yellow,purple
// console.log(colors3); // green,blue,yellow



// ========== splice()
// let colors = ["red", "green", "blue"];

// // let removed = colors.splice(0,1); // удаление первого элемента
// // console.log(colors); // green,blue
// // console.log(removed); // red — массив с одним элементом

// removed = colors.splice(1, 0, "yellow", "orange"); // вставка двух элементов в позиции 1
// console.log(colors); // green,yellow,orange,blue
// console.log(removed); // пустой массив

// removed = colors.splice(1, 1, "red", "purple"); // вставка двух значений и удаление одного
// console.log(colors); // green,red,purple,orange,blue
// console.log(removed); // yellow — массив с одним элементом


// const months = ["Jan", "Mar", "Apr", "May"];

// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// console.log(months); // ["Jan", "Mar", "Apr", "May"]


/* ========== Методы поиска элементов ============== */

// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// console.log(numbers.indexOf(4)); // 3
// console.log(numbers.lastIndexOf(4)); // 5
// console.log(numbers.includes(4)); // true
// console.log(numbers.indexOf(4, 4)); // 5
// console.log(numbers.lastIndexOf(4, 4)); // 3
// console.log(numbers.includes(4, 7)); // false

// let person = { name: "Nicholas" };
// let people = [{ name: "Nicholas" }];
// let morePeople = [person];
// console.log(people.indexOf(person)); // -1
// console.log(morePeople.indexOf(person)); // 0
// console.log(people.includes(person)); // false
// console.log(morePeople.includes(person)); // true


// const people = [
//     {
//         name: "Matt",
//         age: 27
//     },
//     {
//         name: "Nicholas",
//         age: 29
//     }
// ];

// console.log(people.find((element, index, array) => element.age < 28)); // {name: "Matt", age: 27}
// console.log(people.findIndex((element, index, array) => element.age < 28)); // 0
// console.log(people.findLast((element, index, array) => element.age < 28)); // {name: "Matt", age: 27}
// console.log(people.findLastIndex((element, index, array) => element.age < 28)); // 0



/* ========== Методы перебора элементов ============== */

// let numbers = [1,2,3,4,5,4,3,2,1];

// let everyResult = numbers.every((item, index, array) => item > 2);
// console.log(everyResult); // false

// let someResult = numbers.some((item, index, array) => item > 2);
// console.log(someResult); // true


// let numbers = [1,2,3,4,5,4,3,2,1];
// let filterResult = numbers.filter((item, index, array) => item > 2);
// console.log(filterResult); // [3,4,5,4,3]


// let numbers = [1,2,3,4,5,4,3,2,1];
// let mapResult = numbers.map((item, index, array) => item * 2);
// console.log(mapResult); // [2,4,6,8,10,8,6,4,2]


// let numbers = [1,2,3,4,5,4,3,2,1];
// numbers.forEach((item, index, array) => {
//     // какие-то действия
// });



/* ========== Методы редукции массивов ============== */

// let values = [1,2,3,4,5];
// let sum = values.reduce((prev, cur, index, array) => prev + cur, );
// console.log(sum); // 15


// let values = [1,2,3,4,5];
// let sum = values.reduceRight((prev, cur, index, array) => prev + cur);
// console.log(sum); // 15



/* ==========  Добавление собственных методов ============== */

// Array.prototype.unique = function() {
//     return this.filter((el, index, array) => array.indexOf(el) === index);
// }
  
// let names = ['John', 'Sarah', 'Mike', 'Sarah']; 
// let uniqueNames = names.unique();
// console.log(uniqueNames); // ['John', 'Sarah', 'Mike']


// Array.isFirstElementBoolean = (array) => typeof array[0] === 'boolean';
// console.log(Array.isFirstElementBoolean([true]))
// console.log(Array.isFirstElementBoolean([]))
// console.log(Array.isFirstElementBoolean([12]))


// class MovieCollection extends Array {
//     constructor(name, ...items) {
//         super(...items);
//         this.name = name;     
//     }

//     static getFirstMovie(movies) {
//         return movies[0]
//     }

//     add(movie) {
//         this.push(movie);
//     }
// }

// const movies = new MovieCollection('Филмы',
//     {name: 'Создатель', stars: 10},
//     {name: 'Гадкий 4', stars: 1},
// );
// console.log(movies.name)
// console.log(movies.length)



// movies.add({name: 'Собиратель душ', stars: 4})
// movies.push({name: 'Список подозреваемых', stars: 5})
// movies.name = 'Лучшие филмы';
// console.log(movies.name)
// console.log(movies.length)
// console.log(MovieCollection.getFirstMovie(movies))


/* ========== Тесты производительности методов массивов ============== */

// const arrayToTest = Array(100).fill(0);

// console.time("map");
// arrayToTest.map((item, index) => {
//   return (arrayToTest[index] = item * item + Math.sqrt(item));
// });
// console.timeEnd("map");

// console.time("forEach");
// arrayToTest.forEach((item, index) => {
//   return (arrayToTest[index] = item * item + Math.sqrt(item));
// });
// console.timeEnd("forEach");

// console.time("for");
// for (let i = 0; i < arrayToTest.length; i++) {
//   arrayToTest[i] = arrayToTest[i] * arrayToTest[i] + Math.sqrt(arrayToTest[i]);
// }
// console.timeEnd("for");

// console.time("do while");
// let i = 0;
// do {
//   arrayToTest[i] = arrayToTest[i] * arrayToTest[i] + Math.sqrt(arrayToTest[i]);
//   i++;
// } while (i < arrayToTest.length);
// console.timeEnd("do while");


// console.time("while");
// let i = 0;
// while (i < arrayToTest.length) {
//   arrayToTest[i] =
//     arrayToTest[i] * arrayToTest[i] + Math.sqrt(arrayToTest[i]);
//   i++;
// }
// console.timeEnd("while");



/* ========== Деструктуризация и остаточные параметры ============== */

// let arr = ["Манижа", "Имомова"];

// // let firstName = arr[0];
// // let surname = arr[1];

// let [firstName, surname] = arr;
// console.log(firstName); // Манижа
// console.log(surname);  // Имомова


// let [firstName, surname] = "Манижа Имомова".split(' ');
// console.log(firstName); // Манижа
// console.log(surname);  // Имомова


// let user = {};
// [user.name, user.surname] = "Манижа Имомова".split(' ');

// console.log(user.name); // Манижа
// console.log(user.surname); // Имомова


// let user = {
//     name: "Манижа",
//     age: 30
//   };
  
//   // цикл по ключам и значениям
//   for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`); // name: Манижа, затем age: 30
//   }


//   const [, x, y] = ['a', 'b', 'c'];
//   console.log(x); // b
//   console.log(y); // c


// const [x, , y] = ['a', 'b', 'c'];
// console.log(x); // a
// console.log(y); // c


// const [x,,,y] = ['a', 'b', 'c'];
// console.log(x); // a
// console.log(y); // undefined


// const [x,,,y = 'd'] = ['a', 'b', 'c'];
// console.log(x); // a
// console.log(y); // d


// const [x, y, ...remaining] = ['a', 'b', 'c', 'd'];
// console.log(x); // a
// console.log(y); // b
// console.log(remaining); // [c, d]


// Распространение

// let a = [2,3,4];
// let b = [ 1, ...a, 5 ];
// console.log( b ); // [1,2,3,4,5]

// let a = [2,3,4];
// let b = [ ...a, 1, 5 ];
// console.log( b ); // [2,3,4,1,5]

// let a = [2,3,4];
// let b = [ 1,5, ...a, ];
// console.log( b ); // [1,5,2,3,4]


// let a = [2,3,4];

// function abc(a, b, c) {
//     console.log(a, b, c);
// }

// abc(...a);
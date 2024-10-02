/* ========== Тип Map ============== */

// const m = new Map();

// ========== Инициализация экземпляра Map с вложенными массивами

// const m1 = new Map([
//     ["key1", "val1"],
//     ["key2", "val2"],
//     ["key3", "val3"]
// ]);

// console.log(m1.size); // 3


// ==========  Map ожидает, что в качестве параметра будут переданы пары ключ–значение вне зависимости от того, определены они или нет
const m3 = new Map([[]]);
console.log(m3.has(undefined)); // true
console.log(m3.get(undefined)); // undefined


// ========== Методы Map
// const m = new Map();
// console.log(m.has("firstName")); // false
// console.log(m.get("firstName")); // undefined
// console.log(m.size); // 0

// m.set("firstName", "Matt")
// .set("lastName", "Frisbie");
// console.log(m.has("firstName")); // true
// console.log(m.get("firstName")); // Matt
// console.log(m.size); // 2

// m.delete("firstName"); // удаление только этой пары ключ–значение
// console.log(m.has("firstName")); // false
// console.log(m.has("lastName")); // true
// console.log(m.size); // 1

// m.clear();   // удаление всех пар ключ–значение в этом экземпляре Map
// console.log(m.has("firstName")); // false
// console.log(m.has("lastName")); // false
// console.log(m.size); // 0



// ========== Метод set() возвращает экземпляр Map
// const m = new Map().set("key1", "val1");

// m.set("key2", "val2")
// .set("key3", "val3");

// console.log(m.size); // 3


// ========== Любой тип данных

// const m = new Map();
// const functionKey = function() {};
// const symbolKey = Symbol();
// const objectKey = new Object();

// m.set(functionKey, "functionValue");
// m.set(symbolKey, "symbolValue");
// m.set(objectKey, "objectValue");

// console.log(m.get(functionKey)); // functionValue
// console.log(m.get(symbolKey)); // symbolValue
// console.log(m.get(objectKey)); // objectValue
// console.log(m.get(function() {})); // undefined


// const m = new Map();
// const objKey = {},
// objVal = {},
// arrKey = [],
// arrVal = [];
// m.set(objKey, objVal);
// m.set(arrKey, arrVal);
// objKey.foo = "foo";
// objVal.bar = "bar";
// arrKey.push("foo");
// arrVal.push("bar");
// console.log(m.get(objKey)); // {bar: "bar"}
// console.log(m.get(arrKey)); // ["bar"]



// ========== Перебор значений

// const m = new Map([
//     ["key1", "val1"],
//     ["key2", "val2"],
//     ["key3", "val3"]
// ]);


// for (let pair of m.entries()) {
//     console.log(pair); // [[key1,val1],[key2,val2],[key3,val3]]
// }


// const m = new Map([
//     ["key1", "val1"],
//     ["key2", "val2"],
//     ["key3", "val3"]
// ]);
    
// console.log([...m]); // [[key1,val1],[key2,val2],[key3,val3]]


// const m = new Map([
//     ["key1", "val1"],
//     ["key2", "val2"],
//     ["key3", "val3"]
// ]);

// m.forEach((val, key) => console.log(`${key} -> ${val}`));


// const m = new Map([
//     ["key1", "val1"],
//     ["key2", "val2"],
//     ["key3", "val3"]
// ]);
    
// for (let key of m.keys()) {
//     console.log(key);
// }
    
// for (let key of m.values()) {
//     console.log(key);
// }
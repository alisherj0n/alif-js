/* ========== Тип Set ============== */
// const set = new Set();


// ========== Инициализация набора с массивом
// const set = new Set(["val1", "val2", "val3"]);
// console.log(set.size); // 3


// ==========  Методы
// const s = new Set();
// console.log(s.has("Бехруз")); // false
// console.log(s.size); // 0

// s.add("Бехруз")
// .add("Ансор");
// console.log(s.has("Бехруз")); // true
// console.log(s.size); // 2
// s.delete("Бехруз");
// console.log(s.has("Бехруз")); // false
// console.log(s.has("Ансор")); // true
// console.log(s.size); // 1
// s.clear(); // удаляет все значения в этом экземпляре Set
// console.log(s.has("Бехруз")); // false
// console.log(s.has("Ансор")); // false
// console.log(s.size); // 0



// ==========  Метод add() возвращает экземпляр Set
// const s = new Set().add("val1");
// s.set("val2")
// .set("val3");
// console.log(s.size); // 3


// ========== Другие типы
// const s = new Set();
// const functionVal = function() {};
// const symbolVal = Symbol();
// const objectVal = new Object();
// s.add(functionVal);
// s.add(symbolVal);
// s.add(objectVal);
// console.log(s.has(functionVal)); // true
// console.log(s.has(symbolVal)); // true
// console.log(s.has(objectVal)); // true


// ========== Перебор значений

// const s = new Set(["val1", "val2", "val3"]);

// for (let value of s.values()) {
//     console.log(value);
// }


// const s = new Set(["val1", "val2", "val3"]);
// console.log([...s]); // [val1,val2,val3]

// const s = new Set(["val1", "val2", "val3"]);

// for (let pair of s.entries()) {
//     console.log(pair);
// }

// const s = new Set(["val1", "val2", "val3"]);

// for (let pair of s.keys()) {
//     console.log(pair);
// }

// const s = new Set(["val1", "val2", "val3"]);
// s.forEach((val, dupVal) => alert(`${val} -> ${dupVal}`));


// ==========  Новые методы 2024

// ==========  difference()

// const odds = new Set([1, 3, 5, 7, 9]);
// const squares = new Set([1, 4, 9]);
// console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }

// ==========  intersection()

// const odds = new Set([1, 3, 5, 7, 9]);
// const squares = new Set([1, 4, 9]);
// console.log(odds.intersection(squares)); // Set(2) { 1, 9 }


// ==========  isDisjointFrom()

// const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
// const squares = new Set([1, 4, 9, 16]);
// console.log(primes.isDisjointFrom(squares)); // true

// const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
// const squares = new Set([1, 4, 9, 16]);
// console.log(composites.isDisjointFrom(squares)); // false


// ==========  isSubsetOf()

// const fours = new Set([4, 8, 12, 16]);
// const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
// console.log(fours.isSubsetOf(evens)); // true

// const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
// const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
// console.log(primes.isSubsetOf(odds)); // false

// const set1 = new Set([1, 2, 3]);
// const set2 = new Set([1, 2, 3]);
// console.log(set1.isSubsetOf(set2)); // true
// console.log(set2.isSubsetOf(set1)); // true


// ========== isSupersetOf()

// const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
// const fours = new Set([4, 8, 12, 16]);
// console.log(evens.isSupersetOf(fours)); // true

// const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
// const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
// console.log(odds.isSupersetOf(primes)); // false


// ========== symmetricDifference()

// const evens = new Set([2, 4, 6, 8]);
// const squares = new Set([1, 4, 9]);
// console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }


// ========== union()

// const evens = new Set([2, 4, 6, 8]);
// const squares = new Set([1, 4, 9]);
// console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
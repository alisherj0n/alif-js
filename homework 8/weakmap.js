/* ========== WeakMap ============== */
// const wm = new WeakMap();

// const key1 = {id: 1};
// const key2 = {id: 2};
// const key3 = {id: 3};

// const wm1 = new WeakMap([
//     [key1, "val1"],
//     [key2, "val2"],
//     [key3, "val3"]
// ]);

// console.log(wm.get(key1)); // val2
// console.log(wm.get(key2)); // val2
// console.log(wm.get(key3)); // val3



// const key1 = {id: 1};
// const key3 = {id: 3};
// const wm2 = new WeakMap([
//     [key1, "val1"],
//     ["BADKEY", "val2"],
//     [key3, "val3"]
// ]);


// const wm = new WeakMap();
// const key1 = {id: 1};
// const key2 = {id: 2};

// console.log(wm.has(key1)); // false
// console.log(wm.get(key1)); // undefined

// wm.set(key1, "Matt")
// .set(key2, "Frisbie");
// console.log(wm.has(key1)); // true
// console.log(wm.get(key1)); // Matt

// wm.delete(key1); // удаление только этой пары ключ–значение
// console.log(wm.has(key1)); // false
// console.log(wm.has(key2)); // true



// const wm = new WeakMap();
// wm.set({}, "val");


// const wm = new WeakMap();
// const container = {
//     key: {}
// };

// wm.set(container.key, "val");

// function removeReference(){
//     container.key = null;
// }

// console.log(wm.get(container.key)); // val
// removeReference();
// console.log(wm.get(container.key)); // undefined
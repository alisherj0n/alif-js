const person2 = {
  name: 'Bekhruz',
  age: 29,
};

Object.defineProperty(person2, 'age', {
  writable: false,
  enumerable: false,
  configurable: false,
});

person2.age = 33;
console.log(person2.age);

const descriptor = Object.getOwnPropertyDescriptor(person2, 'age');

console.log(descriptor);

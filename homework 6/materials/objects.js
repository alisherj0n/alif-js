/* ============= Создание объектов  ============= */

/**
 * Паттерн Фабрика:
 * 1. Создание простой фабрики обектов;
*/

// function createUser(name, age, job) {
//     const user = new Object();
//     user.name = name;
//     user.age = age;
//     user.job = job;
    
//     user.sayName = function() {
//         console.log(`My name is ${this.name}. I'm ${this.age}.`);
//     };
    
//     return user;
// }

// const anvar = createUser("Anvar", 29, "Software Engineer");
// const nilufar = createUser("Nilufar", 27, "Doctor");
// const noza = createUser("Nozanin", 18, "Frontend");

// anvar.sayName();
// nilufar.sayName();
// noza.sayName();





/** 
 * Создать объект на основе литерала 
*/

// function createUser(name, age, job) {
//     const user = {
//         name, 
//         age, 
//         job,
        
//         sayName: function() {
//             console.log(`My name is ${this.name}. I'm ${this.age}.`);
//         }
//     }
   
//     return user;
// }

// const anvar = createUser("Anvar", 29, "Software Engineer");
// const nilufar = createUser("Nilufar", 27, "Doctor");
// const noza = createUser("Nozanin", 18, "Frontend");

// anvar.sayName();
// nilufar.sayName();
// noza.sayName();



/** 
 * Более сложный пример создание объектов на основе паттерна фабрика
*/

// function FullTime() {
//     this.hourly = "$12";
// };

// function PartTime() {
//     this.hourly = "$11";
// };

// function Temporary() {
//     this.hourly = "$10";
// };

// function Contractor() {
//     this.hourly = "$15";
// };

// const createEmployee = function (type) {
//         let employee = {};

//         if (type === "fulltime") {
//             employee = new FullTime();
//         } else if (type === "parttime") {
//             employee = new PartTime();
//         } else if (type === "temporary") {
//             employee = new Temporary();
//         } else {
//             employee = new Contractor();
//         }

//         employee.type = type;
        
//         employee.say = function () {
//             console.log(`${this.type}:rate ${this.hourly}/hour`);
//         }

//         return employee;
// }


// function run() {

//     const employees = [];

//     const fulltime = createEmployee("fulltime");
//     const parttime = createEmployee("parttime");
//     const temporary = createEmployee("temporary");
//     const contractor = createEmployee("contractor")
    
//     employees.push(fulltime, parttime, temporary, contractor);


//     employees.forEach((employee) => employee.say());
// }

// run();





/** 
 * Паттерн Конструктор
 * 
 * Паттерн Конструктор функции - в форме функций со свойствами и методами для собственных типов
*/

// function Phone(model, brand) {
//     this.model = model;
//     this.brand = brand;
    
//     this.showInfo = function(){
//         console.log(`${this.brand} ${this.model} clicks picture!`)
//     }
// }
  
//   const iphone = new Phone("Iphone 15", "Apple");
//   const sumsung = new Phone("Galaxy s24 ultra", "Sumsung");
//   iphone.showInfo();
//   sumsung.showInfo();





/** 
 * Создание объектов без передачи аргументов
*/

// function Car() {
//     this.model = "BMW";
    
//     this.sayModel = function() {
//         console.log(this.model);
//     };
// }

// const bmw = new Car;
// bmw.sayModel();





/** 
* Любая функция, вызванная с помощью оператора new, работает как конструктор, а функция, вызванная 
* без new, ведет себя обычным образом.
*/

// function Person(name, age, job) {
//     // 'use strict'
//     this.name = name;
//     this.age = age;
//     this.job = job;
    
//     this.sayName = function() {
//         console.log(this.name);
//     };
// }

// Person("Дилшод", 40, "Doctor"); // функция добавляется к window
// console.log(window.name);
// console.log(window.age);
// console.log(window.job);
// window.sayName();


// const kamila = new Person("Камила", 20, "Designer"); // функция добавляется к экземпляру 
// console.log(kamila.name);
// console.log(kamila.age);
// console.log(kamila.job);
// kamila.sayName();




/** 
* Возвращаемое значение из функция конструктора 
*/

// function Rectangle(width, length) {
//     this.width = width;
//     this.length = length;
    
//     this.draw = function() {
//         console.log(`width: ${this.width} length: ${this.length}`);
//     };

//     return {
//         name: 'rect',
//     };
// }

// const rect = new Rectangle(20, 30);
// console.log(rect);




/** 
 * Паттерн Прототип.
 * 
 * Каждая функция-конструктор имеет скрытое свойство prototype.md, которое указывает на объект,
 * используемый в качестве прототипа для создаваемых объектов. Все свойства и методы, добавленные в prototype.md функции-конструктора,
 * будут доступны для всех объектов, созданных с помощью этой функции-конструктора.
*/

// function Car() {
//     console.log("Car instance created!");
// };

// Car.prototype.color = "Red";

// Car.prototype.drive = function () {
//     console.log(`Driving the car painted in ${this.color}...`);
// };

// const bmw = new Car();
// bmw.drive();

// const audi = new Car();
// audi.drive();

// console.log(bmw.drive == audi.drive); // true





/**
* Учитывая объявление, функция конструктора
* уже имеет связанный объект прототипа:
*/
// function Menu() {}


// console.dir(Menu);
// console.log(Menu.prototype.md);
// console.log(typeof Menu.prototype.md);

/**
* Как было сказано ранее, у функции конструктора есть
* ссылка 'prototype.md' на объект прототипа, и
* у объекта прототипа есть ссылка 'constructor' на
* функцию конструктора. Эти ссылки цикличны:
*/

// console.log(Menu.prototype.md.constructor === Menu);


/**
* Любая стандартная цепочка прототипов завершится на прототипе Object.
* Прототип прототипа Object — null.
*/

// console.log(Menu.prototype.md.__proto__ === Object.prototype.md);
// console.log(Menu.prototype.md.__proto__.constructor === Object);
// console.log(Menu.prototype.md.__proto__.__proto__ === null);


/**
* Экземпляр связан с прототипом через __proto__, который
* является буквальным проявлением скрытого свойства [[Prototype]].
*
* Конструктор связан с прототипом через свойство constructor.
*
* Экземпляр не имеет прямой ссылки на конструктор, только через прототип.
*/

// function Menu(title, options) {
//     this.title = title;
//     this.options = options;
// }

// Menu.prototype.md.render = function() {
//     this.options.forEach(option => console.log(option));
// };

// const desktopMenu = new Menu('Десктопный', []);
// const mobileMenu = new Menu('Мобильный', []);

// console.log(desktopMenu);
// console.log(mobileMenu);
// console.log(desktopMenu.__proto__ === Menu.prototype.md); // true
// console.log(desktopMenu.__proto__ === mobileMenu.__proto__); // true




/**
* instanceof проверит цепочку прототипов экземпляра
*/

// function Cat(name) {
//     this.name = name;
// }

// const cat = new Cat();
// console.log(cat instanceof Cat); // true
// console.log(cat instanceof Object); // true
// console.log(Cat.prototype.md instanceof Object); // true


/**
* Методы isPrototypeOf(), getPrototypeOf(), setPrototypeOf(),
* для проверки, получение и задавать прототип для объекта
*/

// function Admin(name) {
//     this.name = name;
// }

// const admin = new Admin('');

// console.log(Admin.prototype.md.isPrototypeOf(admin));
// console.log(Object.getPrototypeOf(admin));



// function User(name) {
//     this.name = name;
// }

// Object.setPrototypeOf(admin, User.prototype.md);
// console.log(Object.getPrototypeOf(admin));
// console.log(User.prototype.md.isPrototypeOf(admin));





/**
* Понимание иерархии прототипов
* При чтении свойства объекта начинается его поиск
* в экземпляре после в прототипе
*/

// function Person() {}

// Person.prototype.md.name = "Фаррух";
// Person.prototype.md.age = 27;
// Person.prototype.md.job = "Software Engineer";
// Person.prototype.md.sayName = function() {
//     console.log(this.name);
// };


// let person1 = new Person();
// let person2 = new Person();

// person1.name = "Фаридун";

// console.log(person1);
// console.log(person2);
// console.log(person1.name); 
// console.log(person2.name);

// console.log(person1.address); 

/**
* Оператор delete полностью удаляет свойство экземпляра, делая
* свойство прототипа доступным
*/

// function Person() {}

// Person.prototype.md.name = "Фаррух";
// Person.prototype.md.age = 29;
// Person.prototype.md.job = "Software Engineer";
// Person.prototype.md.sayName = function() {
//     console.log(this.name);
// };

// let person1 = new Person();
// let person2 = new Person();

// person1.name = "Фаридун";
// console.log(person1.name);
// console.log(person2.name); 
// delete person1.name;
// console.log(person1.name);


/**
* Метод hasOwnProperty(), унаследованный от типа Object, позволяет выяснить,
* принадлежит свойство экземпляру или прототипу
*/

// function Person() {}

// Person.prototype.md.name = "Фаррух";
// Person.prototype.md.age = 29;
// Person.prototype.md.job = "Software Engineer";
// Person.prototype.md.sayName = function() {
//     console.log(this.name);
// };

// let person1 = new Person();
// let person2 = new Person();

// console.log(person1.hasOwnProperty("name"));

// person1.name = "Фаридун";
// console.log(person1.name);
// console.log(person1.hasOwnProperty("name")); 

// console.log(person2.name); 
// console.log(person2.hasOwnProperty("name")); 

// delete person1.name;
// console.log(person1.name);
// console.log(person1.hasOwnProperty("name"));



/**
* Оператор in можно использовать отдельно или в цикле for-in.
* В первом случае он возвращает true, если свойство с указанным именем 
* имеется у экземпляра или у прототипа объекта
*/


// function Person() {}

// Person.prototype.md.name = "Фаррух";
// Person.prototype.md.age = 29;
// Person.prototype.md.job = "Software Engineer";
// Person.prototype.md.sayName = function() {
//     console.log(this.name);
// };

// let person1 = new Person();
// let person2 = new Person();
// console.log(person1.hasOwnProperty("name"));
// console.log("name" in person1); 

// person1.name = "Фаридун";
// console.log(person1.name); 
// console.log(person1.hasOwnProperty("name")); 
// console.log("name" in person1);

// console.log(person2.name); 
// console.log(person2.hasOwnProperty("name"));
// console.log("name" in person2);

// delete person1.name;
// console.log(person1.name); 
// console.log(person1.hasOwnProperty("name"));
// console.log("name" in person1);



/**
* Object.create() — это метод в JavaScript, который позволяет 
* создать новый объект с заданным прототипом и дополнительными свойствами.
* Object.create(proto, propertiesObject);
*/


// 1. Создание объекта с заданным прототипом
// const animal = {
//     eats: true
// };
  
// const rabbit = Object.create(animal);
// rabbit.jumps = true;
  
// console.log(rabbit.eats);
// console.log(rabbit.jumps);


// // 2. Создание объекта без прототипа

// const obj = Object.create(null);
// obj.name = 'Object without prototype.md';

// console.log(obj.name);
// console.log(Object.getPrototypeOf(obj));


// 3. Добавление свойств с помощью дескрипторов

// const person = Object.create({}, {
//     name: {
//       value: 'Behruz',
//       writable: false, 
//       enumerable: true, 
//       configurable: true
//     },
//     age: {
//       value: 30,
//       writable: true,
//       enumerable: true,
//       configurable: false
//     }
// });

  
// 4. Наследование 

// function Animal() {
//     this.legs = 4;
// }
  
// Animal.prototype.md.walk = function() {
//     console.log('Walking on ' + this.legs + ' legs');
// };
  
// function Dog(name) {
//     this.name = name;
// }
  
// Dog.prototype.md = Object.create(Animal.prototype.md);
// Dog.prototype.md.constructor = Dog;
  
// const myDog = new Dog('Rex');
// myDog.walk();

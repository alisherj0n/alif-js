/**
 * Классы в JavaScript — это шаблоны для создания объектов. 
 * Они определяются с помощью ключевого слова class, за которым следует имя класса и его тело
 */


// 1. Классы создаются через ключевое слово class;

// объявление класса
// class Person {}



// console.log(Person); // class Person {}
// console.log(typeof Person); // function

// классовое выражение
// const Animal = class {};

// console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
// class ClassDeclaration {}
// console.log(ClassDeclaration); // class ClassDeclaration {}



// let Car = class CarName {
    
//     identify() {
//         console.log(Car.name, CarName.name);
//     }

// }

// let car = new Car();
// car.identify(); // CarName CarName
// console.log(Car.name); // CarName 
// console.log(CarName); // ReferenceError: PersonName is not defined


/**
 * Свойства классов в JavaScript — это переменные, которые принадлежат экземпляру класса или самому классу 
 * (в случае статических свойств). Эти свойства можно использовать для хранения данных или состояния объектов.
 * 
 * 1. Свойства экземпляра (Instance properties)
 * 2. Статические свойства (Static properties)
 * 3. Приватные свойства (Private properties)
 */


// 1. Свойства экземпляра (Instance properties)

// class Car {
//     make = 'Toyota';
//     model = 'Camry';
//     year = 2020
// }
  
//   const car1 = new Car();
//   const car2 = new Car();
  
//   console.log(car1.make); // Toyota
//   console.log(car2.make); // Toyota
  

//   2. Статические свойства (Static properties)

// class User {
//     static roles = ['Admin', 'Editor', 'Viewer'];
// }
  
// console.log(User.roles);

// const user = new User()
// user.roles
  

// 3. Приватные свойства (Private properties)

// class BankAccount {
//     #balance = 0; 
// }
  
//   const account = new BankAccount();
//   account.#balance = 0;
  


/**
 * Конструктор в JavaScript — это специальный метод класса, который вызывается при создании нового объекта (экземпляра класса) 
 * с помощью ключевого слова new. Основная цель конструктора — инициализация объекта, 
 * задание начальных значений свойств и выполнение необходимых действий при создании экземпляра.
 * 
 * 1. Объявление конструктора
 * 2. Конструктор по умолчанию
 * 3. Передача параметров в конструктор
 * 4. Инициализация свойств через конструктор
 * 5. Модификация параметров конструктора
 * 6. Работа с приватными свойствами в конструкторе
 * 
 */


// 1. Объявление конструктора

// class User {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   const user1 = new User('Alice', 30);
//   const user2 = new User('Farruj', 30);
//   console.log(user1.name);
//   console.log(user1.age); 
  

// 2. Конструктор по умолчанию

// class Product {

//     constructor(){
//         return this;
//     }
//  }
// const product = new Product();


// 3. Передача параметров в конструктор

// class Car {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
//   }
  
//   const car = new Car('Toyota', 'Camry', 2020);
//   console.log(car.make); 
//   console.log(car.model);
//   console.log(car.year);
  

// 4. Инициализация свойств через конструктор

// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
  
//   const person = new Person('John', 'Doe');
//   console.log(person.getFullName()); 
  

//   5. Модификация параметров конструктора

//   class Rectangle {
//     constructor(width, height) {
//       this.width = width > 0 ? width : 1;  
//       this.height = height > 0 ? height : 1; 
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
//   }
  
//   const rectangle = new Rectangle(-5, 10); 
//   console.log(rectangle.getArea()); 
  

// 6. Работа с приватными свойствами в конструкторе

// class Employee {
//     #salary;
  
//     constructor(name, salary) {
//       this.name = name;
//       this.#salary = salary;
//     }
  
//     getSalary() {
//       return this.#salary;
//     }
  
//     setSalary(newSalary) {
//       if (newSalary > 0) {
//         this.#salary = newSalary;
//       } else {
//         console.log('Invalid salary');
//       }
//     }
//   }
  
//   const emp = new Employee('Bob', 5000);
//   console.log(emp.getSalary());
//   emp.setSalary(6000);
//   console.log(emp.getSalary()); 
  

/**
 * Методы в JavaScript — это функции, которые являются свойствами объектов или классов.
 * В контексте классов методы используются для описания поведения объектов, созданных на основе этих классов.
 * 
 * 1. Методы экземпляра (Instance Methods)
 * 2. Статические методы (Static Methods)
 * 3. Геттеры и сеттеры (Getters and Setters)
 * 4. Приватные методы 
 */

// 1. Методы экземпляра

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

  
const person = new Person('John', 25);
person.greet();
  

// 2. Статические методы

class MathOperations {
    static add(a, b) {
      return a + b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
}
  
console.log(MathOperations.add(5, 3));
console.log(MathOperations.multiply(5, 3)); 

Math.ceil()

Object.freeze()

const ob = {}

ob.toString()

// 3. Геттеры и сеттеры

class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
  
    set fullName(newName) {
      const [firstName, lastName] = newName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const user = new User('John', 'Doe');
  console.log(user.fullName); 
  
  user.fullName = 'Jane Smith';
  console.log(user.firstName); 
  console.log(user.lastName); 
  
  
// 4. Приватные методы 

class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  
    #checkBalance(amount) {
      return this.balance >= amount;
    }
  
    #logTransaction(type, amount) {
      console.log(`${type} of $${amount} by ${this.owner}`);
    }
  
    withdraw(amount) {
      if (this.#checkBalance(amount)) {
        this.balance -= amount;
        this.#logTransaction('Withdrawal', amount);
        return `Withdrawal successful. New balance: $${this.balance}`;
      } else {
        return 'Insufficient funds.';
      }
    }
  
    deposit(amount) {
      this.balance += amount;
      this.#logTransaction('Deposit', amount);
      return `Deposit successful. New balance: $${this.balance}`;
    }
  }
  
  const account = new BankAccount('Alice', 1000);
  console.log(account.deposit(200)); 
  console.log(account.withdraw(300)); 
  console.log(account.#checkBalance(500));
  


/**
 * Наследование в JavaScript — это механизм, позволяющий одному классу (дочернему или производному) 
 * наследовать свойства и методы другого класса (родительского или базового).
 */



// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  

//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//     }
  
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const dog = new Dog('Rex', 'Labrador');
//   dog.speak(); 
//   console.log(dog.breed);



//   Пример с вызовом методов родительского класса через super

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
// class Cat extends Animal {
//     constructor(name) {
//       super(name); 
//     }
  
//     speak() {
//       super.speak();
//       console.log(`${this.name} meows.`);
//     }
// }
  
// const cat = new Cat('Whiskers');
// cat.speak();
  

// Наследование с геттерами и сеттерами

// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
  
//   class Employee extends Person {
//     constructor(firstName, lastName, jobTitle) {
//       super(firstName, lastName);
//       this.jobTitle = jobTitle;
//     }
  
//     get fullName() {
//       return `${super.fullName} (${this.jobTitle})`;
//     }
//   }
  
//   const employee = new Employee('John', 'Doe', 'Developer');
//   console.log(employee.fullName);
  

// Наследование статических методов

// class Vehicle {
//     static type() {
//       return 'Generic Vehicle';
//     }
// }
  
// class Car extends Vehicle {}
  
//   console.log(Vehicle.type()); 
//   console.log(Car.type());
  

// Наследование приватных методов и свойств

// class Animal {
//     #privateMethod() {
//       return 'This is private!';
//     }
  
//     callPrivateMethod() {
//       return this.#privateMethod();
//     }
//   }
  
//   class Dog extends Animal {
    
//     #privateMethod() {
//       return 'Trying to override!';
//     }
//   }
  
//   const dog = new Dog();
//   console.log(dog.callPrivateMethod());
  

// Наследование цепочек

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   class Labrador extends Dog {
//     speak() {
//       console.log(`${this.name}, the Labrador, barks loudly.`);
//     }
//   }
  
//   const lab = new Labrador('Buddy');
//   lab.speak();
  


/**
 * Инкапсуляция — это принцип объектно-ориентированного программирования, который позволяет скрыть внутренние 
 * детали реализации объекта и предоставлять доступ к ним только через строго определённые методы и интерфейсы.
 */

// class BankAccount {
//     #balance = 0;
  
//     constructor(owner) {
//       this.owner = owner;
//     }
  
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//         console.log(`Deposited $${amount}. New balance: $${this.#balance}.`);
//       } else {
//         console.log('Amount should be greater than zero.');
//       }
//     }
  
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.#balance) {
//         this.#balance -= amount;
//         console.log(`Withdrew $${amount}. New balance: $${this.#balance}.`);
//       } else {
//         console.log('Insufficient funds or invalid amount.');
//       }
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
//   }
  
//   const account = new BankAccount('Alice');
//   account.deposit(500);    
//   account.withdraw(200);  
//   console.log(account.getBalance()); 
//   console.log(account.#balance);
  

/**
 * Полиморфизм — это концепция объектно-ориентированного программирования, 
 * которая позволяет объектам разных классов быть использованными через единый интерфейс.
 */

// class Animal {
//     speak() {
//       console.log('Animal makes a sound.');
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log('Dog barks.');
//     }
//   }
  
//   class Cat extends Animal {
//     speak() {
//       console.log('Cat meows.');
//     }
//   }
  
//   const animals = [new Dog(), new Cat(), new Animal()];
  
//   animals.forEach(animal => {
//     animal.speak(); 
//   });


//  Полиморфизм с геттерами и сеттерами

// class Shape {
//     get area() {
//       return 0;
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
  
//     get area() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super();
//       this.width = width;
//       this.height = height;
//     }
  
//     get area() {
//       return this.width * this.height;
//     }
//   }
  
//   const shapes = [new Circle(5), new Rectangle(4, 6)];
  
//   shapes.forEach(shape => {
//     console.log(`Area: ${shape.area}`);
//   });
  

  
// Полиморфизм через интерфейсы и наследование

// class Employee {
//     constructor(name) {
//       this.name = name;
//     }
  
//     work() {
//       console.log(`${this.name} is doing general work.`);
//     }
//   }
  
//   class Developer extends Employee {
//     work() {
//       console.log(`${this.name} is writing code.`);
//     }
//   }
  
//   class Designer extends Employee {
//     work() {
//       console.log(`${this.name} is designing a website.`);
//     }
//   }
  
//   const workers = [new Developer('Alice'), new Designer('Bob'), new Employee('Charlie')];
  
//   workers.forEach(worker => {
//     worker.work(); 
//   });

  
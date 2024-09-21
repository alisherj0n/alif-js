/**
 * Создание объекта:
 * 1. Пустой литерал объекта;
 * 2. Литерал объекта с точными данными;
 * 3. Динамическое заполнение объекта;
 * 4. Создание объекта с помощью конструктора Object();
 * 5. Создание объекта с помощью конструктора Object() с разными аргументами;
*/

// 1. Пустой литерал объекта;
({});

// const user = {};


// 2. Литерал объекта с точными данными;
// const user = {
//     name: "Behruz",
//     age: 16,
//     job: "Frontend Developer",
//
//     sayName: function() {
//         console.log(this.name);
//     },
// }
//
// user.sayName();


// 3. Динамическое заполнение объекта;
// const miniApp = {
//     title: 'alifshop',
//     country: 'Dushanbe'
// };
//
// const isAndroid = true;
//
// if(isAndroid) {
//     miniApp.platform = 'android';
// } else {
//     miniApp.platform = 'ios';
// }


// 4. Создание объекта с помощью конструктора Object();
// const constructor = new Object();
// constructor.name = "Object";
// constructor.type = 'constructor';
// constructor.toString = function() {
//     console.log(this);
// };
//
// constructor.toString();


// 5. Создание объекта с помощью конструктора Object() с разными аргументами;

// const object = new Object();
// console.log(object);
//
// const array = new Object([1, 2, 3]);
// console.log(array instanceof Array);
//
// const boolean = new Object(true);
// console.log(boolean instanceof Boolean);
//
// const number = new Object(3);
// console.log(number instanceof Number);
//
// const string = new Object("test");
// console.log(string instanceof String);



/**
 * Типы ключей объекта:
 * 1. Создание объекта с ключами-строками;
 * 2. Создание объекта с числовыми ключами;
 * 3. Создание объекта  Symbol ключами;
 * 4. Зарезервированные слова в качестве ключа объекта;
 * 5. Краткая запись ключей объекта в литерале.
 */


// 1. Создание объекта с ключами-строками.
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     yearPublished: 1960,
//     "ISBN number": "978-0-06-112008-4"
// };
//
//
// const employeeProfile = {
//     "employee ID": 12345,
//     name: "Jane Doe",
//     department: "Engineering",
//     "email address": "jane.doe@company.com",
//     position: "Software Engineer"
// };


// 2. Создание объекта с числовыми ключами.
// const scores = {
//     1: "Poor",
//     3: "Good",
//     2: "Average",
//     10: "Excellent"
// };
//
//
const httpStatusCodes = {
    200: "OK",  // "200": "OK",
    201: "Created", // "201": "Created"
    204: "No Content",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable"
};

axios.post((response) => {
    switch (response.code) {
        case "200" : httpStatusCodes['200'],
        case "200" : httpStatusCodes['200']
        case "200" : httpStatusCodes['200']
        case "200" : httpStatusCodes['200']
        case "200" : httpStatusCodes['200']
        case "200" : httpStatusCodes['200']
    }
})


// 3. Создание объекта  Symbol ключами.
// const id = Symbol("id");
// const role = Symbol("role");
//
// const user = {
//     [id]: 101,
//     name: "Behruz",
//     [role]: "admin"
// };
//
//
// const accountNumber = Symbol("accountNumber");
// const pinCode = Symbol("pinCode");
//
// const bankAccount = {
//   ownerName: "Behruz",
//   balance: 5000,
//   [accountNumber]: "1234567890",
//   [pinCode]: 1234
// };


// 4. Зарезервированные слова в качестве ключа объекта.
const reservedWords = {
    if: 'if',
    const: 'const',
    for: 'for',
    class:'class',
};


// 5. Краткая запись ключей объекта в литерале.
const title = 'social';
const description = 'for instagram';
const  age = 24

const shorthand = {
    title,
    description,
    age,
}

// const makeUser = (name, age) => {
//     return {
//       name: name,
//       age,
//       isActive: true,
//         showName: function () {
//           console.log(this.name)
//         }
//     };
//   }
//
// const user = makeUser("Farrukh", 27);
//
//
// function submit(name, isActive) {
//     axios.post({title:name, active:isActive}).then();
// }




/**
 * Типы данных как значение:
 * 1. Примитивные типы;
 * 2. Объекты (Object);
 * 3. Другие структуры;
*/

// 1. Примитивные типы;
// const person = {
//     name: "Alice",
//     greeting: "Hello!"
// };

// const statistics = {
//     count: 42, 
//     average: 5.67
// };

// const featureFlags = {
//     isEnabled: true,
//     hasFeatureX: false
// };

// const userProfile = {
//     userId: null,
//     profilePicture: "default.jpg"
// };

// const config = {
//     apiUrl: undefined,
//     timeout: 5000
// };

// 2. Объекты (Object);
// const user = {
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       zip: "10001"
//     },
//     contact: {
//       email: "alice@example.com",
//       phone: "555-1234"
//     }
// };


// const userProfile = {
//     name: "Alice",
//     hobbies: ["reading", "cycling", "cooking"],
//     scores: [95, 82, 91]
// };


// const company = {
//     name: "Tech Solutions",
//     employees: [
//       { name: "Bob", position: "Developer" },
//       { name: "Eve", position: "Designer" },
//       { name: "Charlie", position: "Manager" }
//     ]
// };

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Headphones", price: 150 }
// ]
//
// const cart = {
//     products:products,
//     count: products.length
// };
//
// products.push({ name: "Sumsung", price: 200 });
// console.log(cart);

// 3. Другие структуры;
// const person = {
//   name: "Charlie",
//   contacts: new Map(),
// };

// const article = {
//   title: "Learning JavaScript",
//   tags: new Set(["JavaScript", "Programming", "Web Development"]),
// };

// const errorDetails = {
//     message: "Failed to fetch data",
//     error: new Error("Network error")
// };


/**
 * Функция как значение:
 * 1. Методы объекта;
 * 2. Обычные функции;
 * 3. Стрелочные функции;
 * 4. Методы bind, call и apply;
*/



// 1. Методы объекта;
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     displayInfo: function() {
//       console.log(`Car: ${car.make} ${this.model}`);
//     },
//
//     drive() {
//         console.log('start!');
//     }
// };
  
// car.displayInfo();
// car.drive();

// 2. Обычные функции;
// function show() {
//     // 'use strict';
//     console.log(this);
// }
// show();

// 3. Стрелочные функции;
// let person = {
//     name: "Alice",
//     greet: () => {
//         console.log(this);
//     }
// };
//
// person.greet();


// // 4. Методы bind, call и apply;
function displayInfo(name, year) {
    console.log(`Car: ${this.make} ${this.model} ${year}`);
};

const car = {
    make: "Toyota",
    model: "Corolla",
    displayInfo,
};


const displayInfoWithBind = displayInfo.bind(car, 2020);
displayInfoWithBind();
//
displayInfo.apply(car, ['dsfsdf',2020]);
displayInfo.call(car, 'tstdtds', 2020);


/**
 * Манипуляция со свойствами объекта:
 * 1. Точечная нотация;
 * 2. Скобочная нотация;
*/

// 1. Точечная нотация;
// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020
// };
//
// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);
//
// car.model = 'Camry';
// car.year = 2021;
// car.country = 'Japan';
//
// delete car.model;
// delete car.year;
// delete car.country;
//
// const user = {
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       zip: "10001"
//     },
//     contact: {
//       email: "alice@example.com",
//       phone: "555-1234"
//     }
// };
//
// console.log(user.name);
// console.log(user.address.street);
// console.log(user.address.city);
//
// user.name = 'Jan';
// user.address.street = '52 Main St';
//
// delete user.name;
// delete user.address.street;
//
//
// // 2. Скобочная нотация;
// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020
// };
//
// console.log(car['brand']);
// console.log(car['model']);
// console.log(car['year']);
//
// car['model'] = 'Camry';
// car['year'] = 2021;
// car['country'] = 'Japan';
//
// delete car['model'];
// delete car['year'];
// delete car['country'];

// const user = {
//     name: "Alice",
//     address: {  
//       street: "123 Main St",
//       city: "New York",
//       zip: "10001"
//     },
//     contact: {   
//       email: "alice@example.com",
//       phone: "555-1234"
//     }
// };

// console.log(user['address']['city']); 
// console.log(user['contact']['email']); 



/**
 * Преимущества скобочной нотации для работы с объектами:
 * 1. Использование переменных в качестве ключей;
 * 2. Работа с невалидными именами свойств;
 * 3. Динамическое создание и изменение свойств;
*/ 


// 1. Использование переменных в качестве ключей;
// const key = 'brand';
//
// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020
// };
//
// console.log(car[key]);
// console.log(car['model']);
//
//
//
// // 2. Работа с невалидными именами свойств;
// const car = {
//     'car brand': 'Toyota',
//     'car-model': 'Corolla',
//     400:34
// };
//
// console.log(car['car brand']);
// console.log(car[400]);
// console.log(car['car-model']);
//
//
//
// // 3. Динамическое создание и изменение свойств;
// const propertyName = 'color';
// const sym = Symbol();
// const car = {};
// car[propertyName] = 'blue';
// car[2024] = '2024';
// car[true] = 'success';
// car[sym] = 4;
//
// console.log(car.color);
// console.log(car.true);
// console.log(car[2024]);


/**
 * Вычисляемые ключи объекта в JavaScript позволяют использовать выражения для задания имен свойств объекта.
 * Это полезно, когда имена ключей определяются динамически или вычисляются во время выполнения кода:
 * 1. Основное использование; 
 * 2. Вычисляемые ключи с выражениями;
 * 3. Комбинирование вычисляемых ключей с статичными;
 * 4. Динамическое создание свойств при инициализации;
*/ 

// 1. Основное использование;
// const key = 'color';
//
// const car = {
//   [key]: 'red'
// };
//
// // console.log(car.color); // 'red'
//
// // 2. Вычисляемые ключи с выражениями;
// // const year = 2024;
//
// const car = {
//   [`model_${year}`]: 'New Model'
// };
//
// console.log(car.model_2024);

// 3. Комбинирование вычисляемых ключей с статичными;
// const prefix = 'user';
// const userId = 101;
//
// const user = {
//   [prefix + userId]: 'Shahrom',
//   age: 30
// };

// console.log(user.user101);
// console.log(user[prefix + userId]);

// 4. Динамическое создание свойств при инициализации;
// const generateKey = (id) => `item_${id}`;
//
// const items = {
//   [generateKey(1)]: 'Pen',
//   [generateKey(2)]: 'Pencil'
// };

// console.log(items.item_1);
// console.log(items.item_2);



/**
 * Итерация по объектам в JavaScript позволяет обрабатывать свойства объекта. 
 * 1. for...in;
 * 2. Object.keys();
 * 3. Object.values();
 * 4. Object.entries();
*/ 


// 1. for...in;
// const person = {
//     name: 'Anvar',
//     age: 30,
//     city: 'Dushanbe'
// };
//
// for (const city in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(`${key}: ${person['city']}`);
//   }
// }


// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     start() {
//       console.log('Car started');
//     }
// };
  
// for (const key in car) {
//     if (car.hasOwnProperty(key)) {
//       if (typeof car[key] === 'function') {
//         console.log(`${key} is a method`);
//       } else {
//         console.log(`${key}: ${car[key]}`);
//       }
//     }
// }
  

// 2. Object.keys();
// const person = {
//     name: 'Anvar',
//     age: 30,
//     city: 'Dushanbe'
// };
//
// const keys = Object.keys(person);
// console.log(keys);
  

// keys.forEach(key => {
//     console.log(`${key}: ${person[key]}`);
// });


// // 3. Object.values();
// const person = {
//     name: 'Anvar',
//     age: 30,
//     city: 'Dushanbe'
// };
//
// const values = Object.values(person);
// console.log(values);

// values.forEach(value => console.log(value));


// 4. Object.entries();
// const person = {
//     name: 'Anvar',
//     age: 30,
//     city: 'Dushanbe'
// };
//
// const entries = Object.entries(person);
// console.log(entries);


/**
 * Деструктурирование объектов в JavaScript позволяет извлекать значения из объектов и присваивать их переменным 
 * с помощью синтаксиса, который делает код более читаемым и кратким
 * 1. Базовое деструктурирование;
 * 2. Переименование переменных;
 * 3. Установка значений по умолчанию;
 * 4. Деструктурирование вложенных объектов;
 * 5. Деструктурирование с функциями;
 * 6. Алгоритм преобразования примитивов в объекты ToObject();
 * 7. Оператор остатка объекта (...rest);
 */

// 1. Базовое деструктурирование;
// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     specifications: {
//       year: 2022,
//       color: 'Blue'
//     }
//   };
  
//   const { brand, model } = car;
  
//   console.log(brand); 
//   console.log(model);


// 2. Переименование переменных;
// const response = {
//     status: 200,
//     data: {
//       userId: 1234,
//       userName: 'johndoe'
//     },
//     message: 'Success'
// };
  
// const { status: httpStatus, message: responseMessage, data } = response;
  
// console.log(httpStatus);    
// console.log(responseMessage);
  
  
// 3. Установка значений по умолчанию;
// const settings = {
//     volume: 50,
//     brightness: 80
// };
  

// const { volume, brightness, contrast = 100 } = settings;
  
// console.log(volume);  
// console.log(brightness); 
// console.log(contrast);
  

// 4. Деструктурирование вложенных объектов;
// const user = {
//     id: 1,
//     profile: {
//       name: 'Mahmud',
//       age: 30,
//       location: 'Dushanbe'
//     }
// };
  
// const { profile: { age, location } } = user;
    
// console.log(age);    
// console.log(location); 


// 5. Деструктурирование с функциями
// function configure({ mode = 'light', options: { volume = 50, speed = 1 } }) {
//     console.log(`Mode: ${mode}`);
//     console.log(`Volume: ${volume}`);
//     console.log(`Speed: ${speed}`);
// }
  
// const settings = {
//     mode: 'dark',
//     options: {
//       volume: 75
//     }
// };
  
// configure(settings);
  
  
// 6. Алгоритм преобразования примитивов в объекты ToObject()

// let { length } = 'Farrukh';
// console.log(length);

// let { constructor: c } = 4;
// console.log(c);

// let { _ } = null; // TypeError
// let { _ } = undefined; // TypeError


// 7. Оператор остатка объекта (...rest);
// const user = {
//     name: 'Farid',
//     age: 25,
//     email: 'alice@example.com',
//     city: 'Dushanbe'
// };
  
// const { name, age, ...otherDetails } = user;
  
// console.log(name);        
// console.log(age);  
// console.log(otherDetails);


// const profile = {
//     name: 'Anvar',
//     details: {
//       age: 30,
//       city: 'Dushanbe',
//       country: 'Tajikistan'
//     }
// };
  
// const { details: { city, ...restDetails } } = profile;
  
// console.log(city);        
// console.log(restDetails);
  


/**
 * В JavaScript существует несколько способов слияния объектов, которые позволяют объединять 
 * свойства двух или более объектов в один:
 * 1. Оператор Spread (...);
 * 2. Метод Object.assign();
 */

// 1. Оператор Spread (...);
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);


// const settings = { theme: 'dark', notifications: true };
// const updatedSettings = { ...settings, theme: 'light' };
// console.log(updatedSettings);



// 2. Метод Object.assign();
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObject = Object.assign({}, obj1, obj2);
// console.log(mergedObject);



// const settings = { theme: 'dark', notifications: true };
// Object.assign(settings, { theme: 'light', fontSize: '16px' });
// console.log(settings);
  
/**
 * Опциональная цепочка (?.) в JavaScript позволяет безопасно обращаться к свойствам и методам объектов, 
 * которые могут быть null или undefined, без необходимости писать дополнительную проверку на существование:
 * 1. Безопасный доступ к свойству объекта;
 * 2. Безопасный доступ к вложенным свойствам;
 * 3. Безопасное выполнение метода;
 * 4. Использование с динамическими свойствами;
 */

// 1. Безопасный доступ к свойству объекта;
// const user = { name: 'Anvar' };
// console.log(user?.name); 
// console.log(user?.age);  

// const userWithNull = null;
// console.log(userWithNull?.name);


// 2. Безопасный доступ к вложенным свойствам
// const user = {
//     profile: {
//       address: {
//         city: 'Dushanbe'
//       }
//     }
// };
  
// console.log(user?.profile?.address?.city);
// console.log(user?.profile?.contact?.email);

// if(user && user.profile && user.profile.address && user.profile.address.city) {
//     // Действие
// }
  

// 3. Безопасное выполнение метода
// const user = {
//     greet() {
//       return 'Hello!';
//     }
// };
  
// console.log(user?.greet?.());
// console.log(user?.farewell?.());

// 4. Использование с динамическими свойствами
// const user = {
//     profile: {
//       address: {
//         city: 'Dushanbe'
//       }
//     }
// };
  
// const key = 'city';
  
// console.log(user?.profile?.address?.[key]); 
// console.log(user?.profile?.contact?.[key]);
  

/**
 * Свойства с данными (или свойства данных) в JavaScript — это тип свойств объекта, которые содержат значение и 
 * могут иметь атрибуты для управления доступом к этому значению (например, возможность записи или перечисления).
 */

// const product = {
//     name:"Laptop", 
//     name: {
//         configurable: true, // [[Configurable]]
//         enumerable: true, // [[Enumerable]]
//         writable: true,  // [[Writable]]
//         value: "Laptop", // [[Value]]
//     }
// };


/**
 * Полное управление каждым свойством объекта с помощью метода defineProperty в JavaScript
 * позволяет точно контролировать, как свойства будут вести себя в различных ситуациях
 * Object.defineProperty(obj, prop, descriptor):
 * 1. value: значение свойства по умолчанию;
 * 2. writable: определяет, можно ли изменять значение свойства;
 * 3. enumerable: определяет, будет ли свойство перечисляться в цикле for...in и отображаться при вызове Object.keys(obj);
 * 4. configurable: определяет, можно ли удалить свойство или изменять его дескриптор;
 */


// 1. writable: определяет, можно ли изменять значение свойства;
// const product = {};

// Object.defineProperty(product, 'price', {
//   value: 1000,
//   writable: false,
// });

// product.price = 1200;
// console.log('price', product.price);


// Object.defineProperty(product, 'quantity', {
//   value: 50,
//   writable: true,
// });

// product.quantity = 45;
// console.log('quantity', product.quantity);



// 2. enumerable: определяет, будет ли свойство перечисляться в цикле for...in и отображаться при вызове Object.keys(obj);
// const product = {};

// Object.defineProperty(product, 'price', {
//   value: 1000,
//   enumerable: true,
// });


// Object.defineProperty(product, 'quantity', {
//   value: 50,
//   enumerable: false,
// });


// for (let key in product) {
//   console.log(`${key}: ${product[key]}`);
// }

// const keys = Object.keys(product);
// console.log(keys);

// 3. configurable: определяет, можно ли удалить свойство или изменять его дескриптор;
// const product = {};

// Object.defineProperty(product, 'price', {
//   value: 1000,
//   configurable: true
// });


// Object.defineProperty(product, 'quantity', {
//   value: 50,
//   configurable: false
// });

// delete product.price;
// delete product.quantity;
// console.log(product);

// Object.defineProperty(product, 'quantity', {
//   configurable: true
// });



/**
 * Свойства с функциями доступа, также известные как геттеры и сеттеры, позволяют управлять доступом 
 * к свойствам объекта в JavaScript. Вместо того чтобы хранить данные напрямую,
 * геттеры и сеттеры дают возможность выполнять код при получении или установке значения свойства.
 * Object.defineProperty(obj, prop, descriptor):
 * 1. get: функция, которая выполняется при доступе к значению свойства. Должна возвращать значение;
 * 2. set: функция, которая вызывается при попытке установить значение свойства. Принимает одно значение — новое значение свойства;
 * 3. enumerable: если true, свойство будет видно при перечислении;
 * 4. configurable: если true, свойство можно будет удалить или изменить его дескриптор;
 */

// const user = {
//   _firstName: 'Nozim',
//   _lastName: 'Kenjaev'
// };


// Object.defineProperty(user, 'fullName', {
//   get: function() {
//     return `${this._firstName} ${this._lastName}`;
//   },
//   set: function(value) {
//     [this._firstName, this._lastName] = value.split(' ');
//   },
//   enumerable: false,   
//   configurable: false
// });

// console.log(user.fullName);
// user.fullName = 'Ahmad Rasulov';
// console.log(user.fullName);



/**
 * Метод Object.defineProperties() в JavaScript позволяет одновременно определять или изменять 
 * несколько свойств объекта, используя дескрипторы для каждого свойства. Это более эффективный способ, 
 * чем вызов Object.defineProperty() для каждого свойства по отдельности.
 */


// const user = {};

// Object.defineProperties(user, {
//   firstName: {
//     value: 'Behruz',
//     writable: true,      
//     enumerable: true,    
//     configurable: true
//   },
//   lastName: {
//     value: 'Shokirov',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   fullName: {
//     get: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set: function(value) {
//       [this.firstName, this.lastName] = value.split(' ');
//     },
//     enumerable: true,
//     configurable: true
//   }
// });



/**
 * Методы Object.getOwnPropertyDescriptor() и Object.getOwnPropertyDescriptors() в JavaScript используются для получения 
 * информации о свойствах объекта. Они возвращают дескрипторы, которые описывают поведение этих свойств, 
 * такие как возможность их изменения, перечисления и конфигурации.
 * 1. Object.getOwnPropertyDescriptor(obj, prop);
 * 2. Object.getOwnPropertyDescriptors(obj);
 * 3. Object.getOwnPropertySymbols(obj);
 * 4. Object.getOwnPropertyNames(obj);
 */

// const sym = Symbol();

// const user = {
//   name: 'Faridun',
//   age: 30,
//   [sym]: 'Dushanbe',
//   get description() {
//     return `${this.name} is ${this.age} years old`;
//   },
//   set description(value) {
//     const [name, age] = value.split(' is ');
//     this.name = name;
//     this.age = parseInt(age, 10);
//   }
// };

// const descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// const descriptors = Object.getOwnPropertyDescriptors(user);
// const symbols = Object.getOwnPropertySymbols(user);
// const names = Object.getOwnPropertyNames(user);
// console.log(descriptor);
// console.log(descriptors);
// console.log(symbols);
// console.log(names);




/**
 * В JavaScript есть несколько способов защитить объекты от изменений. Вот основные методы:
 * 1. Метод Object.freeze() делает объект неизменяемым. После применения этого метода объект становится "замороженным": 
 * его свойства не могут быть добавлены, удалены или изменены;
 * 2. Метод Object.seal() предотвращает добавление или удаление свойств объекта, но позволяет изменять существующие свойства.;
 * 3. Метод Object.preventExtensions() предотвращает добавление новых свойств в объект, но позволяет изменять и удалять существующие свойства;
 */

// 1. Object.freeze() / Object.isFrozen();


// const person = {
//   name: 'Farrukh',
//   age: 30
// };

// Object.freeze(person);

// person.age = 31;
// delete person.name;
// person.city = 'Dushanbe'; 
// console.log(person);

// if(Object.isFrozen(person)) {}


// 2. Object.seal() / Object.isSealed()

// const person = {
//   name: 'Farrukh',
//   age: 30
// };

// Object.seal(person);

// person.age = 31;
// delete person.name;
// person.city = 'Dushanbe';
// console.log(person);

// if(Object.isSealed(person)) {}

// 3. Object.preventExtensions() / Object.isExtensible();

// const person = {
//   name: 'Farrukh',
//   age: 30
// };

// Object.preventExtensions(person);

// person.age = 31;
// delete person.name;
// person.city = 'Dushanbe';
// console.log(person);


// if(Object.isExtensible(person)) {}

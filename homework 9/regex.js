/**
 * Литерал регулярного выражения
 */

// const regexpL = /шаблон/; // без флагов
// const regexpLF = /шаблон/gmi; // с флагами gmi (будут описаны далее)


/**
 * Конструктор RegExp
 */

// const regexpC = new RegExp("шаблон");


/**
 * Разница между литералом регулярного выражения и конструктором RegExp
 */

// const word = "hello";
// const regexL = /word/;

// const pattern = "hello";
// const regexC = new RegExp(pattern);

/**
 * Обычные символы
 */

// const str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// const pattern = /text/;
// const result = pattern.test(str);
// console.log(str.match(pattern))
// console.log(result);


/**
 * Символьные классы
 */

// const regex = /\d/;
// const str = "I have 2 apples and 3 bananas.";
// console.log(str.match(regex));
// const newStr = str.replace(regex, '*');
// console.log(newStr);


// const regex = /\d/g;
// const str = "My number is 1234567890.";
// console.log(str.match(regex));
// console.log(regex.test(str));
// const newStr = str.replace(regex, '-');
// console.log(newStr);


// const regex = /\s/;
// const str = "Hello World!";
// console.log(str.match(regex)); 

// const regex = /Найдите все пробелы в этой строке/;
// const str = "Hello, how are you?";
// console.log(str.match(regex));


// const regex = /Замените все пробелы на - в этой строке/;
// const str = "Hello World!";
// const newStr = str.replace(regex, '-');
// console.log(newStr);


// const regex = /\w/;
// const str = "Hello, world!";
// console.log(str.match(regex));


// const regex = /Найдите все буквы в этой строке/;
// const str = "Hello, world!";
// console.log(str.match(regex));
// const newStr = str.replace(regex, '*');
// console.log(newStr);


// const regex = /\D/;
// const str = "123abc456  @#$";
// console.log(str.match(regex));


// const regex = //;
// const str = "123abc456!@#";
// console.log(str.match(regex));
// const newStr = str.replace(regex, '*');
// console.log(newStr); 

// const regex = /\S/gi;
// const str = "   Hello, world!";
// console.log(str.match(regex));

// const regex = /\W/g;
// const str = "Привет, world! 123.";
// console.log(str.match(regex));

// const regex = /h.llo/g;
// const str = "hello htllo hrlll hhr";
// console.log(str.match(regex));

// const regex = //;
// const str = "acb acdb abcd aab acd acb";
// console.log(regex.test(str)); 


/**
 * Якоря: начало строки ^ и конец $
 */

// const regex = /^hello/i;
// const str1 = "Hello, world!";
// const str2 = "Say Hello to everyone.";

// console.log(regex.test(str1)); 
// console.log(regex.test(str2));


// const regex = /world!$/;
// const str1 = "Hello, world!";
// const str2 = "world! is a beautiful place .";

// console.log(regex.test(str1)); 
// console.log(regex.test(str2));


// const regex = /^Hello, world!$/;
// const str1 = "Hello, world!";
// const str2 = "Hello, How are you? world!";

// console.log(regex.test(str1));
// console.log(regex.test(str2)); 


/**
 * Многострочный режим якорей ^ $, флаг "m"
 */

// const regex = /^hello/gm;
// const str = `Hello, world!
// Hello again!
// Goodbye!`;

// console.log(str.match(regex));


// const regex = /world!$/m;
// const str = `Hello, world!
// Goodbye, world!`;

// console.log(str.match(regex));


// const regex = /^Hello, world!$/gm; 
// const str = `Hello, world!
// Hi there!
// Hello, world!`;

// console.log(str.match(regex));


/**
 * Граница слова: \b
 */

// const regex = /\bword\b/;
// const str1 = "This is a word in a sentence.";
// const str2 = "This is a swordfish.";

// console.log(regex.test(str1)); 
// console.log(regex.test(str2));

// const regex = /\bHello/;
// const str1 = "Hello, world!";
// const str2 = "Say Hello!";

// console.log(regex.test(str1));
// console.log(regex.test(str2));


// const regex = /world\b/;
// const str1 = "Hello, world";
// const str2 = "Say hello to the world";

// console.log(regex.test(str1)); 
// console.log(regex.test(str2)); 

/**
 * Экранирование, специальные символы
 */

// const regex = /^w.w\...m/;
// const str = "www.example.com";
// console.log(str.match(regex));


// const regex = /\*/;
// const str = "5 * 3 = 15";
// console.log(str.match(regex));


/**
 * Наборы и диапазоны [...]
 */

// const regex = /[abc.]pple/g;
// const str = ".pple";
// console.log(str.match(regex));


// const regex = /[a-z]$/g;
// const str = "123abc";
// console.log(regex.test(str)); 


// const regex = /[a-zA-Z]/;
// const str = "Hello123";
// console.log(str.match(regex));


// const regex = /^[^0-9]/g;
// const str = "abc123";
// console.log(str.match(regex));

/**
 * Квантификаторы +, *, ? и {n}
 */

// const regex = /\d{3}/; 
// const str = "My code is 123456";
// console.log(str.match(regex));


// const regex = /[a-z]{2}/i;
// const str = "A12bc";
// console.log(str.match(regex));

// const regex = /a{3}/; 
// const str = "aaab";
// console.log(str.match(regex));


// const regex = /\d{2,}/; 
// const str = "A123";
// console.log(str.match(regex));

// const regex = /[a-z]{1,3}/i; 
// const str = "abcdef";
// console.log(str.match(regex));



// const regex = /\d+/;
// const str = "A123B";
// console.log(str.match(regex));

// const regex = /[a-z]+/i;
// const str = "Hello123";
// console.log(str.match(regex));


// const regex = /[a-z]*/ig; 
// const str = "123Hello456";
// console.log(str.match(regex));


// const regex = /colou?r/; 
// const str = "colour";
// console.log(str.match(regex));


/**
 * Скобочные группы
 */

// const regex = /(Hello), (World)/;
// const str = "Hello, World!";
// const result = str.match(regex);
// console.log(result);


// const regex = /(\d{2})-(\d{2})-(\d{4})/;
// const str = "Сегодня 28-09-2024";
// const result = str.match(regex);
// console.log(result);

const regex = /(\w+)\s(\w+)/;
const str = "John Doe";
const result = str.replace(regex, "$2, $1");
console.log(result);

// const regex = /(\w+)\s\1/;
// const str = "hello hello";
// console.log(str.match(regex));

/**
 * Обратные ссылки в шаблоне: \N и \k<имя>
 */

// const regex = /(\d{2})-(\1)-\d{4}/;
// const str = "Дата 12-12-2024 правильная, а 13-11-2023 нет";
// const result = str.match(regex);
// console.log(result); // ["12-12-2024", "12"]


// const regex = /(?<day>\d{2})-(\k<day>)-\d{4}/;
// const str = "Дата 12-12-2024 правильная, а 13-11-2023 нет";
// const result = str.match(regex);
// console.log(result);

/**
 * Альтернация (или) |
 */

// const regex = /cat|dog/;
// const str1 = "I have a cat";
// const str2 = "I have a dog";
// const str3 = "I have a bird";

// console.log(str1.match(regex)); 
// console.log(str2.match(regex)); 
// console.log(str3.match(regex));


// const regex = /\.(jpg|png|gif)$/;
// const str1 = "image.jpg";
// const str2 = "image.png";
// const str3 = "image.gif";
// const str4 = "image.doc";

// console.log(str1.match(regex)); // [".jpg", "jpg"]
// console.log(str2.match(regex)); // [".png", "png"]
// console.log(str3.match(regex)); // [".gif", "gif"]
// console.log(str4.match(regex)); // null (нет совпадений)

/**
 * Опережающие и ретроспективные проверки
 */

// const regex = /cat(?= dog)/;
// const str = "I have a cat dog and a cat";
// const result = str.match(regex);
// console.log(result);

// const regex = /cat(?! dog)/;
// const str = "I have a cat dog and a cat";
// const result = str.match(regex);
// console.log(result);


// const regex = /(?<=cat )dog/;
// const str = "I have a cat dog and a dog";
// const result = str.match(regex);
// console.log(result);

// const regex = /(?<!cat )dog/;
// const str = "I have a cat dog and a dog";
// const result = str.match(regex);
// console.log(result);


/**
 * email
 */


// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
// }

// // Примеры
// console.log(validateEmail("test@example.com")); // true
// console.log(validateEmail("invalid-email@")); // false
// console.log(validateEmail("user@domain.co.uk")); // true
// console.log(validateEmail("user@.com")); // false
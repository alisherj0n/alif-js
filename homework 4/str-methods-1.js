const someText = 'some random text';

const word = 'alif';

console.log(
  `The word "${word}" ${
    someText.includes(word) ? 'is included' : 'is not'
  } in the sentence`
);

console.log(`The Index of "F" in Word variable is ${word.indexOf('f')}`);

console.log(someText.charAt(5));
console.log(someText.replace('some', 'Replaced'));
console.log(someText.slice(5));
console.log(someText.split(' '));
console.log(word.toUpperCase());
console.log(word.toLowerCase());

const x = word;
console.log(x.valueOf());

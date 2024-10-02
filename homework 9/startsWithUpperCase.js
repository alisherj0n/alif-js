function startsWithCapitalLetter(str) {
  return /^[A-Z][a-z]*/.test(str);
}

const strings = [
  'Hello world',
  'hello world',
  'JavaScript is fun',
  '123abc',
  'Good Morning!', //
  '',
];

// Проверка строк
strings.forEach(s => {
  console.log(
    `Строка: "${s}", Начинается с заглавной буквы: ${startsWithCapitalLetter(
      s
    )}`
  );
});

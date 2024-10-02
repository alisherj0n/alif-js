function containsOnlyDigits(str) {
  const regex = /^\d+$/;
  return regex.test(str);
}

// Примеры строк
const strings = ['123456', '123abc', '12.34', '000123', ''];

// Проверка строк
strings.forEach(s => {
  console.log(
    `Строка: "${s}", Содержит только цифры: ${containsOnlyDigits(s)}`
  );
});

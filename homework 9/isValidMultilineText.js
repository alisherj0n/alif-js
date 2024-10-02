function isValidMultilineText(text) {
  return /^#.*\.$/gm.test(text);
}

// Пример многострочного текста
const text1 = `
# Заголовок 1.
# Заголовок 2.
# Заголовок 3.
`;

const text2 = `
# Заголовок 1
# Заголовок 2.
  Заголовок 3.
`;

console.log(isValidMultilineText(text1)); // true
console.log(isValidMultilineText(text2)); // false

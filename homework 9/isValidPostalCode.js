function isValidPostalCode(postalCode) {
  return /^\d{5}$/.test(postalCode);
}

// Примеры почтовых индексов
const postalCodes = [
  '12345',
  //TODO:  Ask teacher about below
  '12345-6789', // корректный формат
  '1234',
  '123456',
  '12345-678',
  'ABCDE',
];

postalCodes.forEach(code => {
  console.log(
    `Почтовый индекс: "${code}", Соответствует формату: ${isValidPostalCode(
      code
    )}`
  );
});

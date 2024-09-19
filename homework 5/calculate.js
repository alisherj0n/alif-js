const calc = (num1, num2, operator) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid input: Both num1 and num2 must be numbers.');
  }

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Invalid operation: Division by zero.');
      }
      return num1 / num2;
    default:
      throw new Error('Invalid operator: Operator must be one of +, -, *, /.');
  }
};

console.log(calc(5, 10, '+'));
console.log(calc(10, 5, '-'));
console.log(calc(5, 10, '*'));
console.log(calc(45, 10, '/'));
console.log(calc(45, 0, '/'));

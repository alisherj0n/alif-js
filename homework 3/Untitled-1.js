function add(a, b) {
  return a + b;
}
function decrease(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function division(a, b) {
  if (a && b) {
    return a / b;
  }
  return console.log('can not divide by 0');
}

console.log(division(50, 0));

console.log(5 / 0);

const convertToNumber = type => {
  return Number(type);
};

console.log(convertToNumber('1000'));
console.log(convertToNumber(1000n));
console.log(convertToNumber(null));
console.log(convertToNumber(undefined));
console.log(convertToNumber(255.5));
console.log(convertToNumber(+1000));
console.log(convertToNumber(-1000));

const convertToBoolean = type => {
  return Boolean(type);
};

console.log(convertToBoolean(10));
console.log(convertToBoolean(0));
console.log(convertToBoolean('some text'));
console.log(convertToBoolean(''));
console.log(convertToBoolean(null));
console.log(convertToBoolean(undefined));
console.log(convertToBoolean(1000n));
console.log(convertToBoolean({}));

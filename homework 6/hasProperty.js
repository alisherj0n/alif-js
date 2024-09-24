const hasProperty = (obj, propertyName) => {
  return obj.hasOwnProperty(propertyName);
};

const car2 = { brand: 'Toyota', model: 'Camry', year: 2021 };

console.log(hasProperty(car2, 'model'));

console.log(hasProperty(car2, 'color'));

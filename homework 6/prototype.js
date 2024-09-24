function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return ` ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Faridun', 'Ubaydov');

const employee22 = Object.create(person1);

employee.position = 'Frontend Developer';

console.log(person1.getFullName());
console.log(employee.position);

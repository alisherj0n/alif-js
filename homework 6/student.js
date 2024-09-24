const studentInfo = {
  name: 'James',
  age: 21,
  major: 'Computer Science',
  gpa: 4,
};

const keys = Object.keys(studentInfo).length;
console.log(keys);

Object.keys(studentInfo).forEach(key => {
  console.log(`${key}: ${studentInfo[key]}`);
});

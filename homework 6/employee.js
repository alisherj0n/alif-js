const employee = {
  name: 'Sattor',
  position: 'Software Engineer',
  salary: '5000',
  isFullTime: true,
};

employee.position = 'Backend Developer';
employee.hireDate = '10.10.2024';
delete employee.salary;

console.log(employee);

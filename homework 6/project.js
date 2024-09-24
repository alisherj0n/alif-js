const project = {
  name: 'Create a JS library',
  team: ['Alisher', 'Farrukh', 'Faridun', 'Lola'],
  status: 'In progress',
};

Object.preventExtensions(project);

try {
  Object.defineProperty(project, 'deadline', {
    value: 'December 2025',
  });
} catch (error) {
  console.log(error);
}

Object.seal(project);

project.status = 'Done';
delete project.team;

console.log(project);

Object.freeze(project);

project.name = 'Apply React to current project';

console.log(project);

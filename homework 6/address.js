const user = {
  userName: 'Alisher',
  email: 'alisher@sample.com',
  age: 28,
};

const address = {
  city: 'Austin',
  state: 'Texas',
  postalCode: 78616,
};

const userProfile = { ...user, ...address };

console.log(userProfile);

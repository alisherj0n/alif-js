const user1 = {
  name: 'Hasan',
  isAdmin: true,
  isGuest: false,
  isActive: true,
};

const user2 = {
  name: 'Khuseyn',
  isAdmin: false,
  isGuest: true,
  isActive: true,
};

const user3 = {
  name: 'Farrukh',
  isAdmin: true,
  isGuest: false,
  isActive: false,
};

const checkAccess = user => {
  if (user.isActive === false) {
    console.log(`Please log in`);
  } else if (user.isAdmin) {
    console.log(`
        User: ${user.name},
        Has an Admin Rights: ${user.isAdmin},
        Access has been granted!
        `);
  } else {
    console.log(`
        Access is not granted`);
  }
};

console.log(checkAccess(user3));

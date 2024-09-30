class AuthSystem {
  constructor() {
    this.users = new Map();
  }

  // Add a new user to the system
  addUser(login, password, name, email) {
    if (this.users.has(login)) {
      console.log('User already exists!');
    } else {
      this.users.set(login, { password, name, email });
      console.log(`User ${login} added successfully.`);
    }
  }

  // Remove a user from the system
  removeUser(login) {
    if (this.users.has(login)) {
      this.users.delete(login);
      console.log(`User ${login} removed successfully.`);
    } else {
      console.log('User not found!');
    }
  }

  // Authenticate a user
  authenticate(login, password) {
    if (this.users.has(login)) {
      const user = this.users.get(login);
      if (user.password === password) {
        console.log(`Authentication successful for user ${login}.`);
        return true;
      } else {
        console.log('Incorrect password!');
      }
    } else {
      console.log('User not found!');
    }
    return false;
  }

  // Get user details (without showing password)
  getUserInfo(login) {
    if (this.users.has(login)) {
      const { password, ...userInfo } = this.users.get(login);
      return userInfo;
    } else {
      console.log('User not found!');
      return null;
    }
  }
}

// Example usage
const auth = new AuthSystem();

auth.addUser('user1', 'password123', 'John Doe', 'john@example.com');
auth.addUser('user2', 'pass456', 'Jane Doe', 'jane@example.com');

console.log(auth.authenticate('user1', 'password123')); // true
console.log(auth.getUserInfo('user1')); // { name: 'John Doe', email: 'john@example.com' }

auth.removeUser('user2');
console.log(auth.getUserInfo('user2')); // User not found!

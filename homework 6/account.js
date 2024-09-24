const account = {
  owner: 'Alisher',
  balance: 1000,
  getOwner() {
    `Account owner is ${this.owner}`;
  },
  deposit(amount) {
    this.balance += amount;
    return `Your balance has been replenished by ${amount} Somoni. Current balance is: ${this.balance}`;
  },
  withdraw(amount) {
    if (this.balance === 0 || amount > this.balance) {
      return 'Insufficient balance';
    }
    return this.balance - amount;
  },
  getBalance() {
    return `Your balance is: ${this.balance}`;
  },
};

console.log(account.getBalance());

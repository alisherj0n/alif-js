const creditAccount = {
  owner: 'Komil',
  balance: 0,
  creditLimit: 5000,
  apr: 0.18,

  deposit(amount) {
    if (amount > 0) this.balance = amount + this.balance;
    return console.log(
      `Пополнение счета на ${amount}, Текущий счет ${this.balance}`
    );
  },

  withdraw(amount) {
    if (this.balance - amount >= -this.creditLimit) {
      console.log(
        `Снято: ${amount}. Текущий баланс: ${(this.balance -= amount)}`
      );
    } else {
      console.log(`Недостаточно средств. Кредитный лимит превышен.`);
    }
  },
};

console.log(creditAccount.deposit(1000));
console.log(creditAccount.withdraw(2000));

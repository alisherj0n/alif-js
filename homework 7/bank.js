class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }

  #balance = 0;
  #transactionHistory = [];

  deposit(amount) {
    this.#balance += amount;
    this.#transactionHistory.push(`На счёт внесено: $${amount}`);
    console.log(
      `На счёт внесено: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  withdraw(amount) {
    this.#balance -= amount;
    this.#transactionHistory.push(`Со счёта списано: $${amount}`);
    console.log(
      `Со счёта списано: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  audit() {
    console.log(`История Транзакций:
         ${this.#transactionHistory}`);
  }
}

const newAccount = new BankAccount();

newAccount.deposit(1000);
newAccount.withdraw(300);
newAccount.audit();

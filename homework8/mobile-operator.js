class MobileOperator {
  clientBase = [];

  addClient(name, balance) {
    const client = {
      name,
      balance,
    };

    this.clientBase.push(client);
  }

  sortClientsByBalance() {
    this.clientBase = this.clientBase.toSorted((a, b) => a.balance - b.balance);
  }

  reverseClientList() {
    return console.log(this.clientBase.reverse());
  }

  getClientList() {
    return console.log(this.clientBase);
  }
}

const mobileOperator = new MobileOperator();

mobileOperator.addClient('Иван', 100);
mobileOperator.addClient('Анна', 200);
mobileOperator.addClient('Сергей', 50);
mobileOperator.addClient('Мария', 150);

mobileOperator.sortClientsByBalance();

mobileOperator.reverseClientList();

mobileOperator.getClientList();

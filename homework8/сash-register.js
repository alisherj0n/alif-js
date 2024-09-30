class CashRegister {
  items = [];

  addItem(name, price, quantity) {
    this.items.push({
      name: name,
      price: price,
      quantity: quantity,
    });
  }

  removeItem(name) {
    console.log(this.items.filter(item => item.name !== name));
  }

  calculateTotal() {
    this.items.reduce((a, b) => a.price + b.price, 0);
  }

  getReceipt() {
    return console.log(this.items);
  }
}

const cashRegister = new CashRegister();

cashRegister.addItem('Яблоки', 1.5, 3);
cashRegister.addItem('Бананы', 1.2, 5);
cashRegister.addItem('Апельсины', 2.0, 2);

cashRegister.removeItem('Бананы');

console.log(cashRegister.getReceipt());

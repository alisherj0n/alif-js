class CashRegister {
  items = [];

  addItem(name, price, quantity) {
    this.items.push({
      name,
      price,
      quantity,
    });
  }

  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
  }

  calculateTotal() {
    console.log(this.items.reduce((a, b) => a + b.price * b.quantity, 0));
  }

  getReceipt() {
    console.log(this.items);
  }
}

const cashRegister = new CashRegister();

cashRegister.addItem('Яблоки', 1.5, 3);
cashRegister.addItem('Бананы', 1.2, 5);
cashRegister.addItem('Апельсины', 2.0, 2);

cashRegister.removeItem('Бананы');

cashRegister.calculateTotal();

cashRegister.getReceipt();

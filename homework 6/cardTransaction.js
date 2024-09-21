const cardTransaction = {
  amount: 0,
  transactionType: ' ',
  transactionStatus: ' ',
  updateTransaction(amount, type, status) {
    this.amount += amount;
    this.transactionType += type;
    this.transactionStatus += status;
    return console.log(
      `${amount}, ${this.transactionType}, ${this.transactionStatus}`
    );
  },
  getTotal(balance) {
    return console.log(`Your balance is ${this.amount}`);
  },
  displayTransaction() {
    return console.log(`object`);
  },
};

cardTransaction.updateTransaction(100, 'purchase', 'completed');
cardTransaction.getTotal();
// cardTransaction.resetTransaction();

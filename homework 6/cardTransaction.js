const cardTransaction = {
  amount: 0,
  transactionType: '',
  transactionStatus: '',

  updateTransaction(amount, type, status) {
    this.amount = amount > 0 ? amount : 0;
    this.transactionType = type;
    this.transactionStatus = status;
  },

  resetTransaction() {
    this.amount = 0;
    this.transactionType = 'purchase';
    this.transactionStatus = 'pending';
  },

  getTotal(balance) {
    if (
      this.transactionType === 'purchase' &&
      this.transactionStatus === 'completed'
    ) {
      return balance - this.amount;
    } else if (
      this.transactionType === 'refund' &&
      this.transactionStatus === 'completed'
    ) {
      return balance + this.amount;
    } else {
      console.log('Transaction is failed.');
      return balance;
    }
  },

  displayTransaction() {
    if (
      this.transactionStatus === 'pending' ||
      this.transactionStatus === 'failed'
    ) {
      console.log('Transactions is failed.');
    } else {
      console.log(`Transaction Details: 
        Amount: ${this.amount} 
        Type: ${this.transactionType} 
        Status: ${this.transactionStatus}`);
    }
  },
};

let currentBalance = 500;

cardTransaction.updateTransaction(100, 'purchase', 'completed');
cardTransaction.displayTransaction();

currentBalance = cardTransaction.getTotal(currentBalance);
console.log(`Current Balance is $${currentBalance}`);

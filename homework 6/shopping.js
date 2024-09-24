const shoppingCart = {
  itemName: '',
  itemPrice: 0,
  itemQuantity: 0,

  updateQuantity(name, price, quantity) {
    this.itemName += name;
    this.itemPrice += price;
    this.itemQuantity += quantity;
  },

  resetItem() {
    (this.itemName = ''), (this.itemPrice = 0), (this.itemQuantity = 0);
  },

  getTotal() {
    this.itemPrice * this.itemQuantity;
  },

  displayCart() {
    console.log(`
        Item in cart: ${this.itemName}, 
        Total price: ${this.itemPrice * this.itemQuantity},
         Item quantity: ${this.itemQuantity}`);
  },
};

shoppingCart.updateQuantity('Ball', 100, 10);
shoppingCart.resetItem();
shoppingCart.displayCart();

console.log(shoppingCart);

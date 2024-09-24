const updateProductQuantity = (obj, quantity) => {
  return (obj.quantity = quantity);
  return obj;
};

const product33 = { name: 'Laptop', price: 999.99, quantity: 5 };
console.log(updateProductQuantity(product33, 10));

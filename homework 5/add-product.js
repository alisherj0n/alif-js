const addProduct = (products, obj) => {
  products.push(obj);
  return products;
};

const items = [
  { name: 'Laptop', price: 999.99, quantity: 5 },
  { name: 'Phone', price: 499.99, quantity: 10 },
];

const newItem = { name: 'Tablet', price: 299.99, quantity: 7 };

console.log(addProduct(items, newItem));

const product = {
  name: 'Bag',
  price: 800,
  category: 'accessories',
  inStock: true,
};

product.price = 1000;
product.inStock = false;
product.rating = 5;
delete product.category;

console.log(product);

const laptop = {
  brand: 'Apple',
  model: 'MacBook Pro',
  year: 2021,
  price: 2000,
};

for (const key in laptop) {
  console.log(`${key}: ${laptop[key]}`);
}

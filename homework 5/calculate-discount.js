const calculateDiscount = (price, discount) => {
  price -= (price / 100) * discount;

  return price;
};

console.log(calculateDiscount(1000, 15));

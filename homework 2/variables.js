function manageGoods(incoming) {
  var currentItems = 50;
  let incomingItems = 0;
  const totalItems = 200;

  if (incoming) incomingItems = incoming;
  currentItems = incomingItems + currentItems;
  console.log(`Current items available: ${currentItems}`);

  if (currentItems > totalItems)
    console.log('The current items exceed total items capacity');
}

manageGoods(500);

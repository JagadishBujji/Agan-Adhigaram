// Compares the cart with the latest stock of each book (stockById: { [bookId]: { stock, discount_price } })
// removed - out of stock items, adjusted - items whose qty is lowered to the available stock
function reconcileCartWithStock(cartItems, stockById) {
  const removed = [];
  const adjusted = [];
  const updatedCartItems = [];

  cartItems.forEach((item) => {
    const book = stockById[item.id];
    const stock = book ? parseInt(book.stock) || 0 : 0;

    if (stock <= 0) {
      removed.push(item);
    } else if (item.qty > stock) {
      const updatedItem = {
        ...item,
        qty: stock,
        total_price: stock * book.discount_price,
      };
      adjusted.push(updatedItem);
      updatedCartItems.push(updatedItem);
    } else {
      updatedCartItems.push(item);
    }
  });

  return {
    removed,
    adjusted,
    updatedCartItems,
    canPlaceOrder:
      cartItems.length > 0 && removed.length === 0 && adjusted.length === 0,
  };
}

export { reconcileCartWithStock };

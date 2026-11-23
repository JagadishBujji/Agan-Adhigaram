import { DEFAULT_PREORDER_MAX_QTY, isPreorder } from "./preorder";

// Compares the cart with the latest details of each book (booksById: { [bookId]: book doc })
// removed - out of stock items, adjusted - items whose qty is lowered to the available stock / pre-order limit
// pre-order books are not checked against the stock, only against the pre-order limit
function reconcileCartWithStock(
  cartItems,
  booksById,
  preorderMaxQty = DEFAULT_PREORDER_MAX_QTY,
) {
  const removed = [];
  const adjusted = [];
  const updatedCartItems = [];

  cartItems.forEach((cartItem) => {
    const book = booksById[cartItem.id];
    const stock = book ? parseInt(book.stock) || 0 : 0;
    const preorder = isPreorder(book);
    const availableQty = preorder ? preorderMaxQty : stock;

    // pre-order might be started/closed by admin after the book was added to the cart
    // price always comes from the latest book - the cart in localStorage may be old
    // (admin changed the price) or edited, and the payment server checks it again
    const latestPrice = book ? Number(book.discount_price) : NaN;
    const item = book
      ? {
          ...cartItem,
          discount_price: latestPrice,
          mrp_price:
            book.mrp_price !== undefined ? book.mrp_price : cartItem.mrp_price,
          total_price: cartItem.qty * latestPrice,
          is_preorder: preorder,
          expected_delivery_date: preorder
            ? book.expected_delivery_date || null
            : null,
          preorder_remark: preorder ? book.preorder_remark || "" : "",
        }
      : cartItem;
    const priceChanged =
      book && Number(cartItem.discount_price) !== latestPrice;

    if (!book || availableQty <= 0) {
      removed.push(item);
    } else if (item.qty > availableQty) {
      const updatedItem = {
        ...item,
        qty: availableQty,
        total_price: availableQty * latestPrice,
      };
      adjusted.push(updatedItem);
      updatedCartItems.push(updatedItem);
    } else if (priceChanged) {
      // customer sees the new price before paying
      adjusted.push(item);
      updatedCartItems.push(item);
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

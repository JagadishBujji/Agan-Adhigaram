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
    const item = book
      ? {
          ...cartItem,
          is_preorder: preorder,
          expected_delivery_date: preorder
            ? book.expected_delivery_date || null
            : null,
          preorder_remark: preorder ? book.preorder_remark || "" : "",
        }
      : cartItem;

    if (!book || availableQty <= 0) {
      removed.push(item);
    } else if (item.qty > availableQty) {
      const updatedItem = {
        ...item,
        qty: availableQty,
        total_price: availableQty * book.discount_price,
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

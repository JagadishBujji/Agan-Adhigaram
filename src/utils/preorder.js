// Pre-order - new books which are not released yet, admin sets the expected delivery date
const DEFAULT_PREORDER_MAX_QTY = 5;

const isPreorder = (book) => Boolean(book && book.is_preorder);

// pre-order books can be bought without stock
const isOutOfStock = (book) => !isPreorder(book) && !(book.stock > 0);

// maximum copies of a pre-order book in one order, set by admin (app/meta)
function getPreorderMaxQty(meta) {
  const maxQty = meta ? meta.preorder_max_qty : undefined;
  return Number.isInteger(maxQty) && maxQty > 0
    ? maxQty
    : DEFAULT_PREORDER_MAX_QTY;
}

function formatExpectedDate(timestamp) {
  if (!timestamp) {
    return "";
  }
  return new Date(timestamp).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// "Pre-order - Expected by 12 Dec 2026"
function getPreorderLabel(book) {
  if (!isPreorder(book)) {
    return "";
  }
  const date = formatExpectedDate(book.expected_delivery_date);
  return date ? `Pre-order - Expected by ${date}` : "Pre-order";
}

// pre-order details stored in the order, items is the ordered_books of the order
function getOrderPreorderDetails(items) {
  const preorderItems = items.filter((item) => item.is_preorder);
  if (preorderItems.length === 0) {
    return { has_preorder: false };
  }
  const dates = preorderItems
    .map((item) => item.expected_delivery_date)
    .filter(Boolean);
  return {
    has_preorder: true,
    // used to find the orders of a pre-order book
    preorder_book_ids: preorderItems.map((item) => item.id),
    // whole order is shipped together, once the last pre-order book is available
    expected_delivery_date: dates.length > 0 ? Math.max(...dates) : null,
  };
}

export {
  DEFAULT_PREORDER_MAX_QTY,
  isPreorder,
  isOutOfStock,
  getPreorderMaxQty,
  formatExpectedDate,
  getPreorderLabel,
  getOrderPreorderDetails,
};

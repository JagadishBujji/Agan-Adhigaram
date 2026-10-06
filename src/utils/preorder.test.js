import {
  getOrderPreorderDetails,
  getPreorderLabel,
  getPreorderMaxQty,
  isOutOfStock,
} from "./preorder";

test("pre-order book is never out of stock", () => {
  expect(isOutOfStock({ stock: 0, is_preorder: true })).toBe(false);
  expect(isOutOfStock({ stock: 0 })).toBe(true);
  expect(isOutOfStock({ stock: -2, is_preorder: false })).toBe(true);
  expect(isOutOfStock({ stock: 3 })).toBe(false);
});

test("pre-order limit set by admin, default is 5", () => {
  expect(getPreorderMaxQty({ preorder_max_qty: 3 })).toBe(3);
  expect(getPreorderMaxQty({})).toBe(5);
  expect(getPreorderMaxQty(undefined)).toBe(5);
  expect(getPreorderMaxQty({ preorder_max_qty: 0 })).toBe(5);
  expect(getPreorderMaxQty({ preorder_max_qty: "4" })).toBe(5);
});

test("pre-order label with the expected date", () => {
  const date = new Date(2026, 11, 12).getTime();

  expect(
    getPreorderLabel({ is_preorder: true, expected_delivery_date: date }),
  ).toBe("Pre-order - Expected by 12 Dec 2026");
  expect(getPreorderLabel({ is_preorder: true })).toBe("Pre-order");
  expect(
    getPreorderLabel({ is_preorder: false, expected_delivery_date: date }),
  ).toBe("");
});

test("order with pre-order books ships together on the latest expected date", () => {
  expect(
    getOrderPreorderDetails([
      { id: "a", is_preorder: true, expected_delivery_date: 100 },
      { id: "b", is_preorder: false },
      { id: "c", is_preorder: true, expected_delivery_date: 300 },
    ]),
  ).toEqual({
    has_preorder: true,
    preorder_book_ids: ["a", "c"],
    expected_delivery_date: 300,
  });
});

test("order without pre-order books", () => {
  expect(getOrderPreorderDetails([{ id: "b", is_preorder: false }])).toEqual({
    has_preorder: false,
  });
});

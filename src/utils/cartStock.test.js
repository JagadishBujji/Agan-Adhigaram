import { reconcileCartWithStock } from "./cartStock";

const cart = [
  { id: "a", title: "A", qty: 2, discount_price: 100, total_price: 200 },
  { id: "b", title: "B", qty: 3, discount_price: 50, total_price: 150 },
];

test("all items in stock - order can be placed with the cart unchanged", () => {
  const result = reconcileCartWithStock(cart, {
    a: { stock: 5, discount_price: 100 },
    b: { stock: 3, discount_price: 50 },
  });

  expect(result.canPlaceOrder).toBe(true);
  expect(result.updatedCartItems).toMatchObject(cart);
});

test("out of stock item is removed and the order is not placed", () => {
  const result = reconcileCartWithStock(cart, {
    a: { stock: 0, discount_price: 100 },
    b: { stock: 3, discount_price: 50 },
  });

  expect(result.canPlaceOrder).toBe(false);
  expect(result.removed.map((item) => item.id)).toEqual(["a"]);
  expect(result.updatedCartItems.map((item) => item.id)).toEqual(["b"]);
});

test("qty more than stock is lowered with the latest price", () => {
  const result = reconcileCartWithStock(cart, {
    a: { stock: 5, discount_price: 100 },
    b: { stock: 1, discount_price: 60 },
  });

  expect(result.canPlaceOrder).toBe(false);
  expect(result.adjusted).toMatchObject([
    { ...cart[1], qty: 1, total_price: 60 },
  ]);
  expect(result.updatedCartItems[0]).toMatchObject(cart[0]);
});

test("deleted book and negative stock are treated as out of stock", () => {
  const result = reconcileCartWithStock(cart, {
    b: { stock: -2, discount_price: 50 },
  });

  expect(result.removed.map((item) => item.id)).toEqual(["a", "b"]);
  expect(result.updatedCartItems).toEqual([]);
  expect(result.canPlaceOrder).toBe(false);
});

test("empty cart cannot place an order", () => {
  expect(reconcileCartWithStock([], {}).canPlaceOrder).toBe(false);
});

describe("pre-order books", () => {
  const preorderBook = {
    stock: 0,
    discount_price: 100,
    is_preorder: true,
    expected_delivery_date: 1800000000000,
    preorder_remark: "Signed copies",
  };

  test("pre-order book can be ordered without stock", () => {
    const result = reconcileCartWithStock([cart[0]], { a: preorderBook }, 5);

    expect(result.canPlaceOrder).toBe(true);
    expect(result.updatedCartItems[0]).toEqual({
      ...cart[0],
      is_preorder: true,
      expected_delivery_date: 1800000000000,
      preorder_remark: "Signed copies",
    });
  });

  test("pre-order qty is lowered to the limit set by admin", () => {
    const result = reconcileCartWithStock(
      [{ ...cart[0], qty: 8, total_price: 800 }],
      { a: preorderBook },
      5,
    );

    expect(result.canPlaceOrder).toBe(false);
    expect(result.adjusted[0].qty).toBe(5);
    expect(result.adjusted[0].total_price).toBe(500);
  });

  test("book released after it was added to the cart is checked against the stock", () => {
    const released = { stock: 1, discount_price: 100, is_preorder: false };
    const result = reconcileCartWithStock(
      [{ ...cart[0], is_preorder: true, expected_delivery_date: 1 }],
      { a: released },
    );

    expect(result.canPlaceOrder).toBe(false);
    expect(result.adjusted[0]).toMatchObject({
      qty: 1,
      is_preorder: false,
      expected_delivery_date: null,
    });
  });

  test("pre-order and in stock books can be in the same order", () => {
    const result = reconcileCartWithStock(cart, {
      a: preorderBook,
      b: { stock: 3, discount_price: 50 },
    });

    expect(result.canPlaceOrder).toBe(true);
    expect(result.updatedCartItems.map((item) => item.is_preorder)).toEqual([
      true,
      false,
    ]);
  });
});

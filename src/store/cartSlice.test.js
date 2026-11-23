import reducer, { setCartItems } from "./cartSlice";

describe("setCartItems", () => {
  beforeEach(() => localStorage.clear());

  it("drops items saved without a book id and recounts the quantity", () => {
    const state = reducer(
      undefined,
      setCartItems([
        { title: "opened from a direct link", qty: 1, total_price: 190 },
        { id: "book-2", title: "ok", qty: 2, total_price: 400 },
      ])
    );

    expect(state.cartItems.map((item) => item.id)).toEqual(["book-2"]);
    expect(state.totalBookQuantity).toBe(2);
    expect(JSON.parse(localStorage.getItem("cartItems"))).toHaveLength(1);
  });

  it("resets the quantity when every item is invalid", () => {
    const state = reducer(
      { cartItems: [], totalBookQuantity: 3, preorderMaxQty: 3 },
      setCartItems([{ title: "no id", qty: 3 }])
    );

    expect(state.cartItems).toEqual([]);
    expect(state.totalBookQuantity).toBe(0);
  });
});

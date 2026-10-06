import {
  deleteAddress,
  formatAddress,
  getDefaultAddress,
  getUserAddresses,
  saveAddress,
  setDefaultAddress,
  toOrderUserDetail,
  validateAddress,
} from "./addresses";

const home = {
  id: "a1",
  label: "Home",
  name: "Ramya",
  phone: "9876543210",
  address: "12, Gandhi Street",
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  pincode: "600001",
  isDefault: true,
};
const office = {
  ...home,
  id: "a2",
  label: "Office",
  city: "Madurai",
  isDefault: false,
};

describe("getUserAddresses", () => {
  test("old profile address becomes the first address", () => {
    const addresses = getUserAddresses({
      name: "Ramya",
      phone: "9876543210",
      address: "12, Gandhi Street",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: "600001",
    });

    expect(addresses).toEqual([{ ...home, id: "profile" }]);
  });

  test("saved addresses are used as they are, even when empty", () => {
    expect(getUserAddresses({ address: "old", addresses: [office] })).toEqual([
      office,
    ]);
    expect(getUserAddresses({ address: "old", addresses: [] })).toEqual([]);
  });

  test("user without any address", () => {
    expect(getUserAddresses({ name: "Ramya", address: "" })).toEqual([]);
    expect(getUserAddresses(undefined)).toEqual([]);
  });
});

describe("validateAddress", () => {
  test("valid address", () => {
    expect(validateAddress(home)).toBe("");
    expect(
      validateAddress({
        ...home,
        address: "Flat 4B, #12/3 Gandhi St.\nT Nagar",
      }),
    ).toBe("");
  });

  test("name and address should be in english, invoice cannot print other letters", () => {
    expect(validateAddress({ ...home, name: "ரம்யா" })).toMatch(/English/);
    expect(validateAddress({ ...home, address: "12, காந்தி தெரு" })).toMatch(
      /English/,
    );
  });

  test.each([
    ["name", ""],
    ["phone", "98765"],
    ["phone", "98765abcde"],
    ["address", "12"],
    ["city", " "],
    ["state", ""],
    ["pincode", "6000"],
    ["pincode", "60000a"],
  ])("invalid %s: %s", (field, value) => {
    expect(validateAddress({ ...home, [field]: value })).not.toBe("");
  });
});

describe("saveAddress", () => {
  test("first address gets an id and becomes the default", () => {
    const result = saveAddress(
      [],
      { ...home, id: "", isDefault: false },
      "new1",
    );

    expect(result).toEqual([{ ...home, id: "new1", isDefault: true }]);
  });

  test("second address is added without changing the default", () => {
    const result = saveAddress([home], { ...office, id: "" }, "new2");

    expect(result.map((item) => [item.id, item.isDefault])).toEqual([
      ["a1", true],
      ["new2", false],
    ]);
  });

  test("new default address replaces the old default", () => {
    const result = saveAddress(
      [home],
      { ...office, id: "", isDefault: true },
      "new2",
    );

    expect(getDefaultAddress(result).id).toBe("new2");
    expect(result.filter((item) => item.isDefault)).toHaveLength(1);
  });

  test("editing keeps the id and trims the values", () => {
    const result = saveAddress(
      [home, office],
      { ...office, city: "  Trichy " },
      "unused",
    );

    expect(result).toHaveLength(2);
    expect(result[1]).toEqual({ ...office, city: "Trichy" });
  });

  test("old profile address keeps its id when it is edited", () => {
    const profile = { ...home, id: "profile" };
    const result = saveAddress(
      [profile],
      { ...profile, city: "Salem" },
      "unused",
    );

    expect(result).toEqual([{ ...profile, city: "Salem" }]);
  });
});

describe("deleteAddress and setDefaultAddress", () => {
  test("deleting the default makes the next address default", () => {
    expect(deleteAddress([home, office], "a1")).toEqual([
      { ...office, isDefault: true },
    ]);
  });

  test("deleting the last address leaves an empty list", () => {
    expect(deleteAddress([home], "a1")).toEqual([]);
  });

  test("only one address is default", () => {
    const result = setDefaultAddress([home, office], "a2");

    expect(result.map((item) => item.isDefault)).toEqual([false, true]);
    expect(setDefaultAddress([home, office], "missing")).toEqual([
      home,
      office,
    ]);
  });
});

test("address is formatted in one line", () => {
  expect(formatAddress(home)).toBe(
    "12, Gandhi Street, Chennai, Tamil Nadu, India - 600001",
  );
  expect(formatAddress({ address: "12, Gandhi Street" })).toBe(
    "12, Gandhi Street",
  );
  expect(formatAddress(null)).toBe("");
});

test("order is delivered to the selected address, account email is kept", () => {
  const user = {
    id: "u1",
    email: "ramya@example.com",
    name: "Ramya",
    phone: "9876543210",
  };
  const gift = { ...office, name: "Sethu", phone: "9123456780" };

  expect(toOrderUserDetail(user, gift)).toEqual({
    id: "u1",
    email: "ramya@example.com",
    name: "Sethu",
    phone: "9123456780",
    address: "12, Gandhi Street",
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600001",
  });
});

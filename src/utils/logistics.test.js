import { getDeliveryCharge, getLogisticsDetails } from "./logistics";

test("delivery charge set by admin is used, including free delivery", () => {
  expect(getDeliveryCharge({ delivery_charge: 80 })).toBe(80);
  expect(getDeliveryCharge({ delivery_charge: 0 })).toBe(0);
});

test("delivery charge falls back to 50 when missing or invalid", () => {
  expect(getDeliveryCharge(undefined)).toBe(50);
  expect(getDeliveryCharge({})).toBe(50);
  expect(getDeliveryCharge({ delivery_charge: "80" })).toBe(50);
  expect(getDeliveryCharge({ delivery_charge: -10 })).toBe(50);
  expect(getDeliveryCharge({ delivery_charge: NaN })).toBe(50);
});

test("old orders with logistic key show the partner name and link", () => {
  expect(getLogisticsDetails({ name: "stcourier", number: "123" })).toEqual({
    name: "ST Courier",
    number: "123",
    trackingUrl: "https://stcourier.com/track/shipment",
  });
});

test("any logistic partner with its tracking link", () => {
  expect(
    getLogisticsDetails({
      name: "DTDC",
      number: "D99",
      tracking_url: "https://www.dtdc.in/tracking.asp",
    }),
  ).toEqual({
    name: "DTDC",
    number: "D99",
    trackingUrl: "https://www.dtdc.in/tracking.asp",
  });
});

test("tracking link is dropped when it is missing or not a web link", () => {
  expect(getLogisticsDetails({ name: "DTDC", number: "1" }).trackingUrl).toBe(
    "",
  );
  expect(
    getLogisticsDetails({
      name: "DTDC",
      number: "1",
      tracking_url: "javascript:alert(1)",
    }).trackingUrl,
  ).toBe("");
});

test("not dispatched orders have no logistics details", () => {
  expect(getLogisticsDetails("")).toBe(null);
  expect(getLogisticsDetails(undefined)).toBe(null);
  expect(getLogisticsDetails({ name: "", number: "" })).toBe(null);
});

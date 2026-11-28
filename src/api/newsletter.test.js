import { toSubscriberId } from "./newsletter";

jest.mock("../services/firebase", () => ({ db: {} }));

test("the same email in any case is one subscriber", () => {
  expect(toSubscriberId("  Reader@Example.COM ")).toBe("reader@example.com");
});

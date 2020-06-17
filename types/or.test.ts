import { cast } from "./or";
import str from "./str";
import num from "./num";

describe("or tests", () => {
  it("when value is equal model, should return value", () => {
    expect(cast([num(), str()], "Hello")).toEqual({
      type: "success",
      value: "Hello",
    });
  });
  it("when value is not equal of any model, should return error", () => {
    expect(cast([num(), str()], true)).toEqual({
      type: "error",
      value: true,
      error: "is not equal of any model",
    });
  });
});

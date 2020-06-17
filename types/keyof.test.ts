import { cast } from "./keyof";
enum Test {
  Value1 = "value1",
  Value2 = "value2",
}
describe("enume tests", () => {
  it("when enumerate contains key, should return value", () => {
    expect(cast(Test, "Value1")).toEqual({
      type: "success",
      value: "Value1",
    });
  });
  it("when enumerate not contains key, should throw error", () => {
    expect(cast(Test, "x")).toEqual({
      type: "error",
      value: "x",
      error:
        'Not found key in enumerate `{"Value1":"value1","Value2":"value2"}`',
    });
  });
});

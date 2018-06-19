import { cast } from "./enume";
enum Test {
    Value1 = "value1",
    Value2 = "value2",
}
describe("enume tests", () => {
    it("when enumerate contains value, should return value", () => {
        expect(cast(Test, "value1")).toEqual({
            type: "success",
            value: Test.Value1,
        });
    });
    it("when enumerate not contains value, should throw error", () => {
        expect(cast(Test, "x")).toEqual({
            type: "error",
            value: "x",
            error: 'Not found in enumerate `{"Value1":"value1","Value2":"value2"}`',
        });
    });
});

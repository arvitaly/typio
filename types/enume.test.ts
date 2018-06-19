import { typio } from "./../typio";
import enume from "./enume";
enum Test {
    Value1 = "value1",
    Value2 = "value2",
}
describe("enume tests", () => {
    it("when enumerate contains value, should return value", () => {
        expect(typio("value1", enume(Test))).toBe(Test.Value1);
    });
    it("when enumerate not contains value, should throw error", () => {
        expect(typio.bind(undefined, "x", enume(Test)))
            .toThrowError('Not found value `x` in enumerate `{"Value1":"value1","Value2":"value2"}`');
    });
});

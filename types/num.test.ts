import { typio } from "./../typio";
import { num } from "./num";

describe("num tests", () => {
    it("when value can be numeric, should cast to float", () => {
        expect(typio("1.5", num())).toBe(1.5);
    });
    it("when value can't be numeric, should throw error", () => {
        expect(typio.bind(undefined, "x", num())).toThrowError("Value `x` is not numeric");
    });
});

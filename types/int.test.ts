import { typio } from "./../typio";
import { int } from "./int";

describe("int tests", () => {
    it("when value can be integer, should cast to integer", () => {
        expect(typio("50", int())).toBe(50);
    });
    it("when value can't be integer, should throw error", () => {
        expect(typio.bind(undefined, "1.5", int())).toThrowError("Value `1.5` is not integer");
        expect(typio.bind(undefined, "x", int())).toThrowError("Value `x` is not integer");
    });
});

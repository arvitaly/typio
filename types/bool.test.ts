import { typio } from "./../typio";
import { bool } from "./bool";

describe("bool tests", () => {
    it("when model is bool, value should be boolean", () => {
        expect(typio(true, bool())).toBe(true);
        expect(typio(false, bool())).toBe(false);
    });
    it("when model is bool and value is not bool should throw error", () => {
        expect(typio.bind(undefined, "x", bool())).toThrowError("Value `x` should be boolean");
    });
});

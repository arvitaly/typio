import { typio } from "./../typio";
import { float } from "./float";

describe("float tests", () => {
    it("when value can be float, should cast to float", () => {
        expect(typio("1.5", float())).toBe(1.5);
    });
    it("when value can't be float, should throw error", () => {
        expect(typio.bind(undefined, "x", float())).toThrowError("Value `x` is not float");
    });
});

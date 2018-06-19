import { typio } from "./../typio";
import { str } from "./str";

describe("str tests", () => {
    it("when value is string or number, should return stringify value", () => {
        expect(typio("test", str())).toBe("test");
        expect(typio(1.1, str())).toBe("1.1");
    });
    it("when value is not string or number, should throw error", () => {
        expect(typio.bind(undefined, {}, str())).toThrowError("Value `[object Object]` should be string or number");
    });
});

import { typio } from "../typio";
import { opt } from "./opt";

describe("opt tests", () => {
    it("when value is undefined, should return undefined", () => {
        expect(typio(undefined, opt({}))).toBeUndefined();
    });
    it("when value is not undefined, should return submodel", () => {
        expect(typio({ test: 1 }, opt({ test: 1 }))).toEqual({ test: 1 });
        expect(typio("test", opt("test"))).toBe("test");
    });
    it("when value not exists, should return undefined", () => {
        expect(typio({}, { test: opt(1) })).toEqual({ test: undefined });
    });
});

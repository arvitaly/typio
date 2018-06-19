"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const str_1 = require("./str");
describe("str tests", () => {
    it("when value is string or number, should return stringify value", () => {
        expect(typio_1.typio("test", str_1.str())).toBe("test");
        expect(typio_1.typio(1.1, str_1.str())).toBe("1.1");
    });
    it("when value is not string or number, should throw error", () => {
        expect(typio_1.typio.bind(undefined, {}, str_1.str())).toThrowError("Value `[object Object]` should be string or number");
    });
});

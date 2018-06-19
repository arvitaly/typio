"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const bool_1 = require("./bool");
describe("bool tests", () => {
    it("when model is bool, value should be boolean", () => {
        expect(typio_1.typio(true, bool_1.bool())).toBe(true);
        expect(typio_1.typio(false, bool_1.bool())).toBe(false);
    });
    it("when model is bool and value is not bool should throw error", () => {
        expect(typio_1.typio.bind(undefined, "x", bool_1.bool())).toThrowError("Value `x` should be boolean");
    });
});

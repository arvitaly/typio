"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const num_1 = require("./num");
describe("num tests", () => {
    it("when value can be numeric, should cast to float", () => {
        expect(typio_1.typio("1.5", num_1.num())).toBe(1.5);
    });
    it("when value can't be numeric, should throw error", () => {
        expect(typio_1.typio.bind(undefined, "x", num_1.num())).toThrowError("Value `x` is not numeric");
    });
});

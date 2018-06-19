"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const int_1 = require("./int");
describe("int tests", () => {
    it("when value can be integer, should cast to integer", () => {
        expect(typio_1.typio("50", int_1.int())).toBe(50);
    });
    it("when value can't be integer, should throw error", () => {
        expect(typio_1.typio.bind(undefined, "1.5", int_1.int())).toThrowError("Value `1.5` is not integer");
        expect(typio_1.typio.bind(undefined, "x", int_1.int())).toThrowError("Value `x` is not integer");
    });
});

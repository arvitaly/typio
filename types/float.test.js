"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const float_1 = require("./float");
describe("float tests", () => {
    it("when value can be float, should cast to float", () => {
        expect(typio_1.typio("1.5", float_1.float())).toBe(1.5);
    });
    it("when value can't be float, should throw error", () => {
        expect(typio_1.typio.bind(undefined, "x", float_1.float())).toThrowError("Value `x` is not float");
    });
});

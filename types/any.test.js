"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const any_1 = require("./any");
const typio_1 = require("../typio");
describe("any tests", () => {
    it("should return value as is", () => {
        const value = "Hello";
        expect(typio_1.default(value, any_1.any())).toBe(value);
    });
});

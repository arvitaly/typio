"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("../typio");
const opt_1 = require("./opt");
describe("opt tests", () => {
    it("when value is undefined, should return undefined", () => {
        expect(typio_1.typio(undefined, opt_1.opt({}))).toBeUndefined();
    });
    it("when value is not undefined, should return submodel", () => {
        expect(typio_1.typio({ test: 1 }, opt_1.opt({ test: 1 }))).toEqual({ test: 1 });
        expect(typio_1.typio("test", opt_1.opt("test"))).toBe("test");
    });
    it("when value not exists, should return undefined", () => {
        expect(typio_1.typio({}, { test: opt_1.opt(1) })).toEqual({ test: undefined });
    });
});

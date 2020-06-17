"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const or_1 = require("./or");
const str_1 = require("./str");
const num_1 = require("./num");
describe("or tests", () => {
    it("when value is equal model, should return value", () => {
        expect(or_1.cast([num_1.default(), str_1.default()], "Hello")).toEqual({
            type: "success",
            value: "Hello",
        });
    });
    it("when value is not equal of any model, should return error", () => {
        expect(or_1.cast([num_1.default(), str_1.default()], true)).toEqual({
            type: "error",
            value: true,
            error: "is not equal of any model",
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empty_1 = require("./empty");
describe("empty tests", () => {
    it("when value not undefined, should return error", () => {
        const value = { obj: "value" };
        expect(empty_1.cast(value)).toEqual({
            type: "error",
            error: "is not undefined",
            value,
        });
    });
    it("when value undefined, should return as is", () => {
        expect(empty_1.cast(undefined)).toEqual({
            type: "success",
            value: undefined,
        });
    });
});

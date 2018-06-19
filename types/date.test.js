"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const date_1 = require("./date");
describe("date tests", () => {
    it("when value is correct date, should return object Date", () => {
        const dt = new Date("2011-01-01 00:00:00");
        expect(typio_1.typio(dt.toString(), date_1.date())).toEqual(dt);
    });
    it("when value is not correct date, should throw error", () => {
        expect(typio_1.typio.bind(undefined, `x`, date_1.date())).toThrowError("Value `x` is not correct date");
    });
});

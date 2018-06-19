"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max_1 = require("./max");
describe("max tests", () => {
    it("max function should have label", () => {
        expect(max_1.max(20).label).toBe("max");
    });
    describe("number", () => {
        it("when value is number and less or equal model should return true", () => {
            expect(max_1.max(20)(19)).toBe(true);
            expect(max_1.max(20)(20)).toBe(true);
        });
        it("when value is number and greater than model should return error-string", () => {
            expect(max_1.max(20)(21)).toBe("Value should be greater or equal 20");
        });
    });
    describe("string", () => {
        it("when value is string and length less or equal model should return true", () => {
            expect(max_1.max(5)("Hello")).toBe(true);
            expect(max_1.max(3)("Bye")).toBe(true);
        });
        it("when value is string and length greater than model should return error-string", () => {
            expect(max_1.max(4)("Hello")).toBe("Length of string should be less or equal 4, current length - 5");
        });
    });
    describe("Date", () => {
        it("when value is Date and less or equal model should return true", () => {
            expect(max_1.max(new Date("2011-01-01 00:00:00"))(new Date("2010-01-01 00:00:00"))).toBe(true);
            expect(max_1.max(new Date("2011-01-01 00:00:00"))(new Date("2011-01-01 00:00:00"))).toBe(true);
        });
        it("when value is Date and greater than model should return error-string", () => {
            expect(max_1.max(new Date("2011-01-01 00:00:00"))(new Date("2012-01-01 00:00:00")))
                .toBe("Value should be less or equal Sat Jan 01 2011 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)");
        });
    });
    describe("array", () => {
        it("when value is array and length less or equal model should return true", () => {
            expect(max_1.max(5)([1, 2, 3, 4])).toBe(true);
            expect(max_1.max(3)([1, 2, 3])).toBe(true);
        });
        it("when value is array and length greater than model should return error-string", () => {
            expect(max_1.max(4)([1, 2, 3, 4, 5])).toBe("Length of array should be less or equal 4, current length - 5");
        });
    });
});

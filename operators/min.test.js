"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const min_1 = require("./min");
describe("min tests", () => {
    it("min function should have label", () => {
        expect(min_1.min(20).label).toBe("min");
    });
    describe("number", () => {
        it("when value is number and greater or equal model should return true", () => {
            expect(min_1.min(20)(21)).toBe(true);
            expect(min_1.min(20)(20)).toBe(true);
        });
        it("when value is number and less than model should return error-string", () => {
            expect(min_1.min(20)(19)).toBe("Value should be greater or equal 20");
        });
    });
    describe("string", () => {
        it("when value is string and length greater or equal model should return true", () => {
            expect(min_1.min(5)("Hello")).toBe(true);
            expect(min_1.min(3)("Bye")).toBe(true);
        });
        it("when value is string and length less than model should return error-string", () => {
            expect(min_1.min(4)("Bye")).toBe("Length of string should be greater or equal 4, current length - 3");
        });
    });
    describe("Date", () => {
        const dtEqual = "Wed, 15 Dec 2010 21:00:00 GMT";
        const dtGreater = "Thu, 16 Dec 2010 21:00:00 GMT";
        const dtLess = "Tue, 14 Dec 2010 21:00:00 GMT";
        it("when value is Date and greater or equal model should return true", () => {
            expect(min_1.min(new Date(dtEqual))(new Date(dtEqual))).toBe(true);
            expect(min_1.min(new Date(dtEqual))(new Date(dtGreater))).toBe(true);
        });
        it("when value is Date and less than model should return error-string", () => {
            expect(min_1.min(new Date(dtEqual))(new Date(dtLess))).toBe("Value should be greater or equal " + dtEqual);
        });
        it("when value is not Date, but model is Date, should return error-string", () => {
            expect(min_1.min(new Date(dtEqual))("")).toBe("Value should be instance of Date");
        });
    });
    describe("array", () => {
        it("when value is array and length greater or equal model should return true", () => {
            expect(min_1.min(5)([1, 2, 3, 4, 5, 6])).toBe(true);
            expect(min_1.min(3)([1, 2, 3])).toBe(true);
        });
        it("when value is array and length less than model should return error-string", () => {
            expect(min_1.min(4)([1, 2])).toBe("Length of array should be greater or equal 4, current length - 2");
        });
    });
});

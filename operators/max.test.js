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
        const dtEqual = "Wed, 15 Dec 2010 21:00:00 GMT";
        const dtGreater = "Thu, 16 Dec 2010 21:00:00 GMT";
        const dtLess = "Tue, 14 Dec 2010 21:00:00 GMT";
        it("when value is Date and less or equal model should return true", () => {
            expect(max_1.max(new Date(dtEqual))(new Date(dtEqual))).toBe(true);
            expect(max_1.max(new Date(dtEqual))(new Date(dtLess))).toBe(true);
        });
        it("when value is Date and greater than model should return error-string", () => {
            expect(max_1.max(new Date(dtEqual))(new Date(dtGreater))).toBe("Value should be less or equal " + dtEqual);
        });
        it("when value is not Date, but model is Date, should return error-string", () => {
            expect(max_1.max(new Date(dtEqual))("")).toBe("Value should be instance of Date");
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

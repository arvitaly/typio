import { max } from "./max";

describe("max tests", () => {
    it("max function should have label", () => {
        expect(max(20).label).toBe("max");
    });
    describe("number", () => {
        it("when value is number and less or equal model should return true", () => {
            expect(max(20)(19)).toBe(true);
            expect(max(20)(20)).toBe(true);
        });
        it("when value is number and greater than model should return error-string", () => {
            expect(max(20)(21)).toBe("Value should be greater or equal 20");
        });
    });
    describe("string", () => {
        it("when value is string and length less or equal model should return true", () => {
            expect(max(5)("Hello")).toBe(true);
            expect(max(3)("Bye")).toBe(true);
        });
        it("when value is string and length greater than model should return error-string", () => {
            expect(max(4)("Hello")).toBe("Length of string should be less or equal 4, current length - 5");
        });
    });
    describe("Date", () => {
        it("when value is Date and less or equal model should return true", () => {
            expect(max(new Date("2011-01-01 00:00:00"))(new Date("2010-01-01 00:00:00"))).toBe(true);
            expect(max(new Date("2011-01-01 00:00:00"))(new Date("2011-01-01 00:00:00"))).toBe(true);
        });
        it("when value is Date and greater than model should return error-string", () => {
            expect(max(new Date("2011-01-01 00:00:00"))(new Date("2012-01-01 00:00:00")))
                .toBe("Value should be less or equal Fri, 31 Dec 2010 21:00:00 GMT");
        });
    });
    describe("array", () => {
        it("when value is array and length less or equal model should return true", () => {
            expect(max(5)([1, 2, 3, 4])).toBe(true);
            expect(max(3)([1, 2, 3])).toBe(true);
        });
        it("when value is array and length greater than model should return error-string", () => {
            expect(max(4)([1, 2, 3, 4, 5])).toBe("Length of array should be less or equal 4, current length - 5");
        });
    });
});

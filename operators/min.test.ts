import { min } from "./min";

describe("min tests", () => {
    it("min function should have label", () => {
        expect(min(20).label).toBe("min");
    });
    describe("number", () => {
        it("when value is number and greater or equal model should return true", () => {
            expect(min(20)(21)).toBe(true);
            expect(min(20)(20)).toBe(true);
        });
        it("when value is number and less than model should return error-string", () => {
            expect(min(20)(19)).toBe("Value should be greater or equal 20");
        });
    });
    describe("string", () => {
        it("when value is string and length greater or equal model should return true", () => {
            expect(min(5)("Hello")).toBe(true);
            expect(min(3)("Bye")).toBe(true);
        });
        it("when value is string and length less than model should return error-string", () => {
            expect(min(4)("Bye")).toBe("Length of string should be greater or equal 4, current length - 3");
        });
    });
    describe("Date", () => {
        it("when value is Date and greater or equal model should return true", () => {
            expect(min(new Date("2011-01-01 00:00:00"))(new Date("2012-01-01 00:00:00"))).toBe(true);
            expect(min(new Date("2011-01-01 00:00:00"))(new Date("2011-01-01 00:00:00"))).toBe(true);
        });
        it("when value is Date and less than model should return error-string", () => {
            expect(min(new Date("2011-01-01 00:00:00"))(new Date("2010-01-01 00:00:00")))
                .toBe("Value should be greater or equal Fri, 31 Dec 2010 21:00:00 GMT");
        });
    });
    describe("array", () => {
        it("when value is array and length greater or equal model should return true", () => {
            expect(min(5)([1, 2, 3, 4, 5, 6])).toBe(true);
            expect(min(3)([1, 2, 3])).toBe(true);
        });
        it("when value is array and length less than model should return error-string", () => {
            expect(min(4)([1, 2])).toBe("Length of array should be greater or equal 4, current length - 2");
        });
    });
});

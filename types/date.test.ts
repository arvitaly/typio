import { typio } from "./../typio";
import { date } from "./date";

describe("date tests", () => {
    it("when value is correct date, should return object Date", () => {
        const dt = new Date("2011-01-01 00:00:00");
        expect(typio(dt.toString(), date())).toEqual(dt);
    });
    it("when value is not correct date, should throw error", () => {
        expect(typio.bind(undefined, `x`, date())).toThrowError("Value `x` is not correct date");
    });
});

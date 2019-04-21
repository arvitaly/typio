import { any } from "./any";
import typio from "../typio";

describe("any tests", () => {
    it("should return value as is", () => {
        const value = "Hello";
        expect(typio(value, any())).toBe(value);
    });
});

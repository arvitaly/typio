import { match } from "./match";

describe("match tests", () => {
    const regexp = new RegExp("^Hello", "gi");
    it("when value is string and matched to regexp should return true", () => {
        expect(match(regexp)("HelloTest")).toBe(true);
    });
    it("when value is string and not matched to regexp should return error-string", () => {
        expect(match(regexp)("elloTest")).toBe("Value should be matched with expression `" + regexp + "`");
    });
});

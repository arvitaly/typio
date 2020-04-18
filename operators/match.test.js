"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("./match");
describe("match tests", () => {
    const regexp = new RegExp("^Hello", "gi");
    it("when value is string and matched to regexp should return true", () => {
        expect(match_1.match(regexp)("HelloTest")).toBe(true);
    });
    it("when value is string and not matched to regexp should return error-string", () => {
        expect(match_1.match(regexp)("elloTest")).toBe("Value should be matched with expression `" + regexp + "`");
    });
});

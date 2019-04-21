import { cast } from "./empty";

describe("empty tests", () => {
    it("when value not undefined, should return error", () => {
        const value = { obj: "value" };
        expect(cast(value)).toEqual({
            type: "error",
            error: "is not undefined",
            value,
        });
    });
    it("when value undefined, should return as is", () => {
        expect(cast(undefined)).toEqual({
            type: "success",
            value: undefined,
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyof_1 = require("./keyof");
var Test;
(function (Test) {
    Test["Value1"] = "value1";
    Test["Value2"] = "value2";
})(Test || (Test = {}));
describe("enume tests", () => {
    it("when enumerate contains key, should return value", () => {
        expect(keyof_1.cast(Test, "Value1")).toEqual({
            type: "success",
            value: "Value1",
        });
    });
    it("when enumerate not contains key, should throw error", () => {
        expect(keyof_1.cast(Test, "x")).toEqual({
            type: "error",
            value: "x",
            error: 'Not found key in enumerate `{"Value1":"value1","Value2":"value2"}`',
        });
    });
});

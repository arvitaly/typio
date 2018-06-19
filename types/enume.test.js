"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enume_1 = require("./enume");
var Test;
(function (Test) {
    Test["Value1"] = "value1";
    Test["Value2"] = "value2";
})(Test || (Test = {}));
describe("enume tests", () => {
    it("when enumerate contains value, should return value", () => {
        expect(enume_1.cast(Test, "value1")).toEqual({
            type: "success",
            value: Test.Value1,
        });
    });
    it("when enumerate not contains value, should throw error", () => {
        expect(enume_1.cast(Test, "x")).toEqual({
            type: "error",
            value: "x",
            error: 'Not found in enumerate `{"Value1":"value1","Value2":"value2"}`',
        });
    });
});

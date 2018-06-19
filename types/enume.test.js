"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const enume_1 = require("./enume");
var Test;
(function (Test) {
    Test["Value1"] = "value1";
    Test["Value2"] = "value2";
})(Test || (Test = {}));
describe("enume tests", () => {
    it("when enumerate contains value, should return value", () => {
        expect(typio_1.typio("value1", enume_1.default(Test))).toBe(Test.Value1);
    });
    it("when enumerate not contains value, should throw error", () => {
        expect(typio_1.typio.bind(undefined, "x", enume_1.default(Test)))
            .toThrowError('Not found value `x` in enumerate `{"Value1":"value1","Value2":"value2"}`');
    });
});

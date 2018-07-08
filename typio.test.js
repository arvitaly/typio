"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
const with_error_1 = require("with-error");
const InvalidTypeError_1 = require("./InvalidTypeError");
const typio_1 = require("./typio");
const TypioType_1 = require("./TypioType");
describe("typio tests", () => {
    it("when model and value are simple primitive and they are not equal, should throw error", () => {
        expect(with_error_1.default(() => typio_1.typio(1, 2)).error).toEqual(new InvalidTypeError_1.InvalidTypeError({
            path: "",
            message: "Model `2` not equal `1`",
            value: 1,
        }));
    });
    it("when model is function should return result of it", () => {
        expect(typio_1.typio("test", (value) => value + "1")).toBe("test1");
    });
    it("when model is instance of TypioType and cast method return success should return value", () => {
        const typ = new TypioType_1.TypioType([], (value) => ({ type: "success", value: value + "1" }));
        expect(typio_1.typio("test", typ)).toBe("test1");
    });
    it("when model is instance of TypioType and cast method return error should throw error", () => {
        const typ = new TypioType_1.TypioType([], (value) => ({ type: "error", error: "error1", operator: "oper1", value }));
        expect(with_error_1.default(() => typio_1.typio("testError", typ)).error).toEqual(new InvalidTypeError_1.InvalidTypeError({
            path: "",
            value: "testError",
            message: "error1",
            operator: "oper1",
        }));
    });
    it("when model is not undefined and value is undefined should throw error", () => {
        expect(with_error_1.default(() => typio_1.typio(undefined, true)).error).toEqual(new InvalidTypeError_1.InvalidTypeError({
            path: "",
            message: "For model `true` value should not be undefined",
            value: undefined,
            operator: undefined,
        }));
    });
    it("when model is array and value is not array should throw error", () => {
        expect(with_error_1.default(() => typio_1.typio(true, [])).error).toEqual(new InvalidTypeError_1.InvalidTypeError({
            path: "",
            message: "Value is not array, but model is array",
            value: true,
            operator: undefined,
        }));
    });
    it("when model is array and value is array and model length is one," + " should apply first model to every values", () => {
        expect(typio_1.typio([1, 1], [1])).toEqual([1, 1]);
    });
    it("when model is array and value is array and model length more than one," +
        " should apply model to every values", () => {
        expect(typio_1.typio([1, 2], [1, 2])).toEqual([1, 2]);
    });
    it("when model is plain-object and value is not plain-object should throw error", () => {
        expect(with_error_1.default(() => typio_1.typio(1, {})).error).toEqual(new InvalidTypeError_1.InvalidTypeError({
            path: "",
            message: "Object is not plain-object, but model is plain-object",
            value: 1,
        }));
    });
    it("when model and value is plain-object should apply every model fields to value fields", () => {
        expect(typio_1.typio({ a: 1 }, { a: 1 })).toEqual({ a: 1 });
    });
    it("when model and value is plain-object and value has unknown keys should throw error", () => {
        expect(with_error_1.default(() => typio_1.typio({ a: 1, b: 2 }, { a: 1 })).error).toEqual(new InvalidTypeError_1.InvalidTypeError({
            path: "",
            message: "Unknown keys " + JSON.stringify(["b"]) + " in object `" + JSON.stringify({ a: 1, b: 2 }) + "`",
            value: { a: 1, b: 2 },
        }));
    });
});

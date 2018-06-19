"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./TypioType");
describe("TypioType tests", () => {
    it("when operator return false should return error withour operator error description", () => {
        const operator = (() => false);
        operator.label = "oper1";
        const typ = new TypioType_1.TypioType([operator], () => {
            return {
                type: "success",
                value: "x",
            };
        });
        const res = typ.cast("");
        expect(res).toEqual({
            type: "error",
            operator: operator.label,
            error: undefined,
            value: "x",
        });
    });
    it("when operator return true should return success with value", () => {
        const operator = (() => true);
        operator.label = "oper1";
        const typ = new TypioType_1.TypioType([operator], () => {
            return {
                type: "success",
                value: "x",
            };
        });
        const res = typ.cast("");
        expect(res).toEqual({
            type: "success",
            value: "x",
        });
    });
    it("when operator return string should return string should return type error with operator error", () => {
        const operator = (() => "error1");
        operator.label = "oper1";
        const typ = new TypioType_1.TypioType([operator], () => {
            return {
                type: "success",
                value: "x",
            };
        });
        const res = typ.cast("");
        expect(res).toEqual({
            type: "error",
            operator: operator.label,
            error: "error1",
            value: "x",
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function cast(value) {
    if (typeof value !== "string" && typeof value !== "number") {
        return {
            type: "error",
            error: "should be string or number",
            value,
        };
    }
    return {
        type: "success",
        value: value.toString(),
    };
}
exports.cast = cast;
function str(...operators) {
    return new TypioType_1.TypioType(operators, cast, "str");
}
exports.str = str;
exports.default = str;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool = exports.cast = void 0;
const TypioType_1 = require("./../TypioType");
function cast(value) {
    if (value !== true && value !== false) {
        return {
            type: "error",
            error: "should be true or false",
            value,
        };
    }
    return {
        type: "success",
        value,
    };
}
exports.cast = cast;
function bool(...operators) {
    return new TypioType_1.TypioType(operators, cast, "bool");
}
exports.bool = bool;
exports.default = bool;

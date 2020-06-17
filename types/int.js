"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int = exports.cast = void 0;
const TypioType_1 = require("./../TypioType");
function cast(value) {
    const intValue = parseInt(value, 10);
    if (intValue.toString() !== value.toString()) {
        return {
            type: "error",
            error: "is not integer",
            value,
        };
    }
    return {
        type: "success",
        value: intValue,
    };
}
exports.cast = cast;
function int(...operators) {
    return new TypioType_1.TypioType(operators, cast, "int");
}
exports.int = int;
exports.default = int;

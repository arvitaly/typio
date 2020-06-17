"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = exports.cast = void 0;
const TypioType_1 = require("../TypioType");
function cast(value) {
    const floated = parseFloat(value);
    if (isNaN(floated) || !isFinite(value)) {
        return {
            error: "is not numeric",
            type: "error",
            value,
        };
    }
    return {
        type: "success",
        value: floated,
    };
}
exports.cast = cast;
function num(...operators) {
    return new TypioType_1.TypioType(operators, cast, "num");
}
exports.num = num;
exports.default = num;

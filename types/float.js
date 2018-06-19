"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("../TypioType");
function cast(value) {
    const floated = parseFloat(value);
    if (isNaN(floated) || !isFinite(value)) {
        return {
            type: "error",
            error: "is not float",
            value,
        };
    }
    return {
        type: "success",
        value: floated,
    };
}
exports.cast = cast;
function float(...operators) {
    return new TypioType_1.TypioType(operators, cast);
}
exports.float = float;
exports.default = float;

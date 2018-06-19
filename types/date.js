"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function cast(value) {
    const dt = new Date(value);
    if (dt.getTime() === 0 || isNaN(dt.getTime())) {
        return {
            type: "error",
            value,
            error: "is not correct date",
        };
    }
    return {
        type: "success",
        value: dt,
    };
}
exports.cast = cast;
function date(...operators) {
    return new TypioType_1.TypioType(operators, cast);
}
exports.date = date;
exports.default = date;

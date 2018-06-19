"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function str(...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        if (typeof (value) !== "string" && typeof (value) !== "number") {
            throw new Error("Value `" + value + "` should be string or number");
        }
        return value.toString();
    });
}
exports.str = str;
exports.default = str;

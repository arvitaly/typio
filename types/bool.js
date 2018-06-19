"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function bool(...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        if (value !== true && value !== false) {
            throw new Error("Value `" + value + "` should be boolean");
        }
        return value;
    });
}
exports.bool = bool;
exports.default = bool;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function int(...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        const intValue = parseInt(value, 10);
        if (intValue.toString() !== value.toString()) {
            throw new Error("Value `" + value + "` is not integer");
        }
        return intValue;
    });
}
exports.int = int;
exports.default = int;

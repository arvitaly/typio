"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("../TypioType");
function num(...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        const floated = parseFloat(value);
        if (isNaN(floated) || !isFinite(value)) {
            throw new Error("Value `" + value + "` is not numeric");
        }
        return floated;
    });
}
exports.num = num;
exports.default = num;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("../TypioType");
function float(...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        const floated = parseFloat(value);
        if (isNaN(floated) || !isFinite(value)) {
            throw new Error("Value `" + value + "` is not float");
        }
        return floated;
    });
}
exports.float = float;
exports.default = float;

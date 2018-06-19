"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function date(...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        const dt = new Date(value);
        if (dt.getTime() === 0 || isNaN(dt.getTime())) {
            throw new Error("Value `" + value + "` is not correct date");
        }
        return dt;
    });
}
exports.date = date;
exports.default = date;

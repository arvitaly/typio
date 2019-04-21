"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("../TypioType");
function any() {
    return new TypioType_1.default([], (value) => ({
        type: "success",
        value,
    }), "any");
}
exports.any = any;
exports.default = any;

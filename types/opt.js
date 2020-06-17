"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opt = void 0;
const typio_1 = require("./../typio");
function opt(obj) {
    return ((value) => typeof value === "undefined" ? undefined : typio_1.typio(value, obj));
}
exports.opt = opt;
exports.default = opt;

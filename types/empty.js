"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = exports.cast = void 0;
const TypioType_1 = require("../TypioType");
function cast(value) {
    if (typeof value !== "undefined") {
        return {
            error: "is not undefined",
            type: "error",
            value,
        };
    }
    return {
        type: "success",
        value: undefined,
    };
}
exports.cast = cast;
function empty() {
    return new TypioType_1.default([], cast, "empty");
}
exports.empty = empty;
exports.default = empty;

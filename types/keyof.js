"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyof = exports.cast = void 0;
const TypioType_1 = require("./../TypioType");
function cast(enumerate, value) {
    if (!Object.keys(enumerate).find((e) => e === value)) {
        return {
            type: "error",
            error: "Not found key in enumerate `" + JSON.stringify(enumerate) + "`",
            value,
        };
    }
    return {
        type: "success",
        value,
    };
}
exports.cast = cast;
function keyof(enumerate, ...operators) {
    return new TypioType_1.TypioType(operators, (value) => cast(enumerate, value), "keyof");
}
exports.keyof = keyof;
exports.default = keyof;

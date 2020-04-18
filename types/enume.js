"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function cast(enumerate, value) {
    if (!Object.keys(enumerate).find((e) => enumerate[e] === value)) {
        return {
            type: "error",
            error: "Not found in enumerate `" + JSON.stringify(enumerate) + "`",
            value,
        };
    }
    return {
        type: "success",
        value,
    };
}
exports.cast = cast;
function enume(enumerate, ...operators) {
    return new TypioType_1.TypioType(operators, (value) => cast(enumerate, value), "enume");
}
exports.enume = enume;
exports.default = enume;

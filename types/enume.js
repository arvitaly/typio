"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./../TypioType");
function enume(enumerate, ...operators) {
    return new TypioType_1.TypioType(operators, (value) => {
        if (!Object.keys(enumerate).find((e) => enumerate[e] === value)) {
            throw new Error("Not found value `" + value + "` in enumerate `" + JSON.stringify(enumerate) + "`");
        }
        return value;
    });
}
exports.enume = enume;
exports.default = enume;

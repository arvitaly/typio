"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typio_1 = require("./../typio");
const TypioType_1 = require("../TypioType");
function cast(objs, value) {
    for (const obj of objs) {
        const result = typio_1.typioValue(value, obj);
        if (result.status === "success") {
            return {
                type: "success",
                value: result.value,
            };
        }
    }
    return {
        error: "is not equal of any model",
        type: "error",
        value,
    };
}
exports.cast = cast;
exports.or = ((...models) => {
    return new TypioType_1.default([], (value) => cast(models, value), "or");
});
exports.default = exports.or;

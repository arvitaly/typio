"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = ((maxValue) => {
    const fn = ((value) => {
        if (typeof (value) === "string") {
            return value.length <= maxValue ? true : "Length of string should be less or equal "
                + maxValue + ", current length - " + value.length;
        }
        if (maxValue instanceof Date) {
            if (!(value instanceof Date)) {
                throw new Error("Value should be instance of Date");
            }
            return value.getTime() <= maxValue.getTime() ? true : "Value should be less or equal "
                + maxValue.toUTCString();
        }
        if (Array.isArray(value)) {
            return value.length <= maxValue ? true : "Length of array should be less or equal "
                + maxValue + ", current length - " + value.length;
        }
        return value <= maxValue ? true : "Value should be greater or equal " + maxValue;
    });
    fn.label = "max";
    return fn;
});
exports.default = exports.max;

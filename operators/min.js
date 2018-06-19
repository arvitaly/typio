"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = ((minValue) => {
    const fn = ((value) => {
        if (typeof (value) === "string") {
            return value.length >= minValue ? true : "Length of string should be greater or equal "
                + minValue + ", current length - " + value.length;
        }
        if (minValue instanceof Date) {
            if (!(value instanceof Date)) {
                throw new Error("Value should be instance of Date");
            }
            return value.getTime() >= minValue.getTime() ? true : "Value should be greater or equal " + minValue;
        }
        if (Array.isArray(value)) {
            return value.length >= minValue ? true : "Length of array should be greater or equal "
                + minValue + ", current length - " + value.length;
        }
        return value >= minValue ? true : "Value should be greater or equal " + minValue;
    });
    fn.label = "min";
    return fn;
});
exports.default = exports.min;

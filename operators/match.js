"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
exports.match = ((regexp) => {
    return (value) => {
        return regexp.test(value)
            ? true
            : "Value should be matched with expression `" + regexp + "`";
    };
});
exports.default = exports.match;

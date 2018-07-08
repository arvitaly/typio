"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidTypeError extends Error {
    constructor(config) {
        const errorStr = formatError(config);
        super(errorStr);
        this.config = config;
        this.errorStr = errorStr;
    }
}
exports.InvalidTypeError = InvalidTypeError;
function formatError(config) {
    return ("InvalidTypError: \nPath: " +
        config.path +
        (config.operator ? "\nOperator: " + config.operator : "") +
        "\nMessage: " +
        config.message +
        "\nValue: " +
        config.value);
}
exports.formatError = formatError;
exports.default = InvalidTypeError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypioType {
    constructor(operators, castFn) {
        this.operators = operators;
        this.castFn = castFn;
    }
    cast(obj) {
        const initValue = this.castFn(obj);
        for (const operator of this.operators) {
            const operatorResult = operator(initValue);
            if (operatorResult !== true) {
                throw new Error("Invalid value `"
                    + initValue + "` for operator `" + operator.label + "`, error: " + operatorResult);
            }
        }
        return initValue;
    }
}
exports.TypioType = TypioType;
exports.default = TypioType;

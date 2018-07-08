"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypioType {
    // tslint:disable-next-line:variable-name
    constructor(operators, castFn, 
    // tslint:disable-next-line:variable-name
    name = "") {
        this.operators = operators;
        this.castFn = castFn;
        this.name = name;
    }
    cast(obj) {
        const initValue = this.castFn(obj);
        if (initValue.type === "error") {
            return initValue;
        }
        for (const operator of this.operators) {
            const operatorResult = operator(initValue.value);
            if (operatorResult !== true) {
                return {
                    type: "error",
                    operator: operator.label,
                    value: initValue.value,
                    error: typeof operatorResult === "string" ? operatorResult : undefined,
                };
            }
        }
        return {
            type: "success",
            value: initValue.value,
        };
    }
}
exports.TypioType = TypioType;
exports.default = TypioType;

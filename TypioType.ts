import { CastResult, TypioOperator } from "./typings";
export class TypioType<T> {
    constructor(
        protected operators: Array<TypioOperator<T>>,
        protected castFn: (value: any) => CastResult<T>) {

    }
    public cast(obj: any): CastResult<T> {
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
                    error: (typeof (operatorResult) === "string" ? operatorResult : undefined),
                };
            }
        }
        return {
            type: "success",
            value: initValue.value,
        };
    }
}
export default TypioType;

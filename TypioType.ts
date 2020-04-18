import { CastResult, TypioOperator } from "./typings";
export class TypioType<T> {
    public _____$TYPIO$ = true;
    // tslint:disable-next-line:variable-name
    constructor(
        protected operators: TypioOperator<T>[],
        protected castFn: (value: any) => CastResult<T>,
        // tslint:disable-next-line:variable-name
        public name = "",
    ) {}
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
export default TypioType;

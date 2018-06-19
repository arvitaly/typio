import { TypioOperator } from "./typings";

export class TypioType<T> {
    constructor(protected operators: Array<TypioOperator<T>>, protected castFn: (value: any) => T) {

    }
    public cast(obj: any) {
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
export default TypioType;

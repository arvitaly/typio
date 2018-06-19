import { TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function int(...operators: Array<TypioOperator<number>>): number {
    return new TypioType(operators, (value) => {
        const intValue = parseInt(value, 10);
        if (intValue.toString() !== value.toString()) {
            throw new Error("Value `" + value + "` is not integer");
        }
        return intValue;
    }) as any;
}
export default int;

import { TypioOperator } from "../typings";
import { TypioType } from "../TypioType";

export function float(...operators: Array<TypioOperator<number>>): number {
    return new TypioType(operators, (value) => {
        const floated = parseFloat(value);
        if (isNaN(floated) || !isFinite(value)) {
            throw new Error("Value `" + value + "` is not float");
        }
        return floated;
    }) as any;
}
export default float;

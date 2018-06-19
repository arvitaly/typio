import { TypioOperator } from "../typings";
import { TypioType } from "../TypioType";

export function num(...operators: Array<TypioOperator<number>>): number {
    return new TypioType(operators, (value) => {
        const floated = parseFloat(value);
        if (isNaN(floated) || !isFinite(value)) {
            throw new Error("Value `" + value + "` is not numeric");
        }
        return floated;
    }) as any;
}
export default num;

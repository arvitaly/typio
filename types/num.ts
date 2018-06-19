import { CastResult, TypioOperator } from "../typings";
import { TypioType } from "../TypioType";

export function cast(value: any): CastResult<number> {
    const floated = parseFloat(value);
    if (isNaN(floated) || !isFinite(value)) {
        return {
            error: "is not numeric",
            type: "error",
            value,
        };
    }
    return {
        type: "success",
        value: floated,
    };
}

export function num(...operators: Array<TypioOperator<number>>): number {
    return new TypioType(operators, cast) as any;
}
export default num;

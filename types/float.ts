import { CastResult, TypioOperator } from "../typings";
import { TypioType } from "../TypioType";

export function cast(value: any): CastResult<number> {
    const floated = parseFloat(value);
    if (isNaN(floated) || !isFinite(value)) {
        return {
            type: "error",
            error: "is not float",
            value,
        };
    }
    return {
        type: "success",
        value: floated,
    };
}

export function float(...operators: Array<TypioOperator<number>>): number {
    return new TypioType(operators, cast, "float") as any;
}
export default float;

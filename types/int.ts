import { CastResult, TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function cast(value: any): CastResult<number> {
    const intValue = parseInt(value, 10);
    if (intValue.toString() !== value.toString()) {
        return {
            type: "error",
            error: "is not integer",
            value,
        };
    }
    return {
        type: "success",
        value: intValue,
    };
}

export function int(...operators: TypioOperator<number>[]): number {
    return new TypioType(operators, cast, "int") as any;
}
export default int;

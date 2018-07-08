import { CastResult, TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function cast(value: any): CastResult<string> {
    if (typeof value !== "string" && typeof value !== "number") {
        return {
            type: "error",
            error: "should be string or number",
            value,
        };
    }
    return {
        type: "success",
        value: value.toString(),
    };
}
export function str(...operators: Array<TypioOperator<string>>): string {
    return new TypioType(operators, cast, "str") as any;
}
export default str;

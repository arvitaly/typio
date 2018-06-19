import { TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function str(...operators: Array<TypioOperator<string>>): string {
    return new TypioType(operators, (value) => {
        if (typeof (value) !== "string" && typeof (value) !== "number") {
            throw new Error("Value `" + value + "` should be string or number");
        }
        return value.toString();
    }) as any;
}
export default str;

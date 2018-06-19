import { TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function bool(...operators: Array<TypioOperator<boolean>>): boolean {
    return new TypioType(operators, (value) => {
        if (value !== true && value !== false) {
            throw new Error("Value `" + value + "` should be boolean");
        }
        return value;
    }) as any;
}
export default bool;

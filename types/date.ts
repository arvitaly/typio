import { TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function date(...operators: Array<TypioOperator<Date>>): Date {
    return new TypioType(operators, (value) => {
        const dt = new Date(value);
        if (dt.getTime() === 0 || isNaN(dt.getTime())) {
            throw new Error("Value `" + value + "` is not correct date");
        }
        return dt;
    }) as any;
}
export default date;

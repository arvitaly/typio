import { CastResult, TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function cast(value: any): CastResult<Date> {
    const dt = new Date(value);
    if (dt.getTime() === 0 || isNaN(dt.getTime())) {
        return {
            type: "error",
            value,
            error: "is not correct date",
        };
    }
    return {
        type: "success",
        value: dt,
    };
}

export function date(...operators: Array<TypioOperator<Date>>): Date {
    return new TypioType(operators, cast, "date") as any;
}
export default date;

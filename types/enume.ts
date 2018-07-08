import { CastResult, TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function cast<T>(enumerate: T, value: any): CastResult<T[keyof T]> {
    if (!Object.keys(enumerate).find((e) => (enumerate as any)[e] === value)) {
        return {
            type: "error",
            error: "Not found in enumerate `" + JSON.stringify(enumerate) + "`",
            value,
        };
    }
    return {
        type: "success",
        value,
    };
}

export function enume<T>(enumerate: T, ...operators: Array<TypioOperator<keyof T>>): T[keyof T] {
    return new TypioType(operators, (value) => cast(enumerate, value) as any, "enum") as any;
}
export default enume;

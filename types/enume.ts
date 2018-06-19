import { TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function enume<T>(enumerate: T, ...operators: Array<TypioOperator<keyof T>>): T[keyof T] {
    return new TypioType(operators, (value) => {
        if (!Object.keys(enumerate).find((e) => (enumerate as any)[e] === value)) {
            throw new Error("Not found value `" + value + "` in enumerate `" + JSON.stringify(enumerate) + "`");
        }
        return value;
    }) as any;
}
export default enume;

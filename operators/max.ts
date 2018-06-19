import { TypioOperator } from "../typings";

interface MaxOperator {
    (maxValue: number): TypioOperator<number | string | any[]>;
}
interface MaxOperator {
    (maxValue: Date): TypioOperator<Date>;
}

export const max: MaxOperator = ((maxValue: number | Date) => {
    const fn = ((value: string | number | Date | any[]) => {
        if (typeof (value) === "string") {
            return value.length <= maxValue ? true : "Length of string should be less or equal "
                + maxValue + ", current length - " + value.length;
        }
        if (maxValue instanceof Date) {
            if (!(value instanceof Date)) {
                throw new Error("Value should be instance of Date");
            }
            return value.getTime() <= maxValue.getTime() ? true : "Value should be less or equal " + maxValue;
        }
        if (Array.isArray(value)) {
            return value.length <= maxValue ? true : "Length of array should be less or equal "
                + maxValue + ", current length - " + value.length;
        }
        return value <= maxValue ? true : "Value should be greater or equal " + maxValue;
    }) as any;
    fn.label = "max";
    return fn;
});
export default max;

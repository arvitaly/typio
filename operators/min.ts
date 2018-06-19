import { TypioOperator } from "./../typings";

interface MinOperator {
    (minValue: number): TypioOperator<number | string | any[]>;
}
interface MinOperator {
    (minValue: Date): TypioOperator<Date>;
}

export const min: MinOperator = ((minValue: number | Date) => {
    const fn = ((value: string | number | Date) => {
        if (typeof (value) === "string") {
            return value.length >= minValue ? true : "Length of string should be greater or equal "
                + minValue + ", current length - " + value.length;
        }
        if (minValue instanceof Date) {
            if (!(value instanceof Date)) {
                throw new Error("Value should be instance of Date");
            }
            return value.getTime() >= minValue.getTime() ? true : "Value should be greater or equal " + minValue;
        }
        if (Array.isArray(value)) {
            return value.length >= minValue ? true : "Length of array should be greater or equal "
                + minValue + ", current length - " + value.length;
        }
        return value >= minValue ? true : "Value should be greater or equal " + minValue;
    }) as any;
    fn.label = "min";
    return fn;
});
export default min;

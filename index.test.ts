// tslint:disable-next-line:no-implicit-dependencies
import withError from "with-error";
import { bool, date, enume, float, int, match, max, min, num, opt, or, str, typio } from ".";
import { InvalidTypeError } from "./InvalidTypeError";
enum TestEnum {
    EnumValue1 = "EnumValue1",
    EnumValue2 = "EnumValue2",
}
it("when all values is correct, should return casted object", () => {
    const dt1 = new Date("2011-01-02 00:00:00");
    const raw = JSON.parse(
        JSON.stringify({
            bool1: true,
            str1: 20,
            int1: "30",
            num1: "1.45",
            obj1: {
                enum1: "EnumValue1",
            },
            opt2: "-100.5",
            date1: dt1.toString(),
            arr1: ["str1", "15"],
            or1: "Hello",
        }),
    );
    const result = typio(raw, {
        bool1: bool(),
        str1: str(min(1), max(15)),
        int1: int(min(15), max(45)),
        num1: num(max(15)),
        obj1: {
            enum1: enume(TestEnum),
        },
        opt1: opt(str()),
        opt2: opt(float()),
        date1: date(),
        arr1: [str(match(new RegExp("str"))), num()],
        or1: or(bool(), num(), str()),
    });

    expect(result.bool1).toBe(true);
    expect(result.str1.substr(0, 2)).toBe("20");
    expect(result.int1).toBe(30);
    expect(result.num1.toExponential()).toBe("1.45e+0");
    expect(result.obj1.enum1).toBe(TestEnum.EnumValue1);
    expect(result.opt1).toBe(undefined);
    expect(result.opt2).toBe(-100.5);
    expect(result.date1.getTime()).toBe(dt1.getTime());
    expect(result.arr1).toEqual(["str1", 15]);
    expect(result.or1).toBe("Hello");
});
it("when values not correct, should throw error", () => {
    const { error } = withError(() => typio({}, { x: 1 }));
    expect(error).toEqual(
        new InvalidTypeError({
            message: "For model `1` value should not be undefined",
            operator: undefined,
            path: ".x",
            value: undefined,
        }),
    );
});

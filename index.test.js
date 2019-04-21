"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
const with_error_1 = require("with-error");
const _1 = require(".");
const InvalidTypeError_1 = require("./InvalidTypeError");
var TestEnum;
(function (TestEnum) {
    TestEnum["EnumValue1"] = "EnumValue1";
    TestEnum["EnumValue2"] = "EnumValue2";
})(TestEnum || (TestEnum = {}));
it("when all values is correct, should return casted object", () => {
    const dt1 = new Date("2011-01-02 00:00:00");
    const any1 = { obj: "value" };
    const raw = JSON.parse(JSON.stringify({
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
        any1,
    }));
    const result = _1.typio(raw, {
        bool1: _1.bool(),
        str1: _1.str(_1.min(1), _1.max(15)),
        int1: _1.int(_1.min(15), _1.max(45)),
        num1: _1.num(_1.max(15)),
        obj1: {
            enum1: _1.enume(TestEnum),
        },
        opt1: _1.opt(_1.str()),
        opt2: _1.opt(_1.float()),
        date1: _1.date(),
        arr1: [_1.str(_1.match(new RegExp("str"))), _1.num()],
        or1: _1.or(_1.bool(), _1.num(), _1.str()),
        any1: _1.any(),
        empty1: _1.empty(),
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
    expect(result.any1).toEqual(any1);
    expect(result.empty1).toBeUndefined();
});
it("when values not correct, should throw error", () => {
    const { error } = with_error_1.default(() => _1.typio({}, { x: 1 }));
    expect(error).toEqual(new InvalidTypeError_1.InvalidTypeError({
        message: "For model `1` value should not be undefined",
        operator: undefined,
        path: ".x",
        value: undefined,
    }));
});

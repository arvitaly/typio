import { CastResult } from "../typings";

export function expectError(message: string) {
    return {
        type: "error",
        error: message,
    };
}
export function expectSuccess(value: any) {
    return {
        type: "success",
        value,
    };
}
export function runTestsForCasting(
    cast: (value: any) => CastResult<any>,
    tests: {
        describe: string;
        expectations: {
            name: string;
            expected: any;
            value: any;
        }[];
    }[],
) {
    for (const test of tests) {
        describe(test.describe, () => {
            for (const expectation of test.expectations) {
                it(expectation.name, () => {
                    if (expectation.expected.type === "success") {
                        expect(cast(expectation.value)).toEqual(expectation.expected);
                    } else {
                        expect(cast(expectation.value)).toEqual({ ...expectation.expected, value: expectation.value });
                    }
                });
            }
        });
    }
}

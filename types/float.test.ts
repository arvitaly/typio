import { expectError, expectSuccess, runTestsForCasting } from "./../util/testutils";
import { cast } from "./float";

const tests = [
    {
        describe: "float tests",
        expectations: [
            {
                name: "when value can be float, should cast to float",
                value: "1.5",
                expected: expectSuccess(1.5),
            },
            {
                name: "when value can't be float, should return error",
                value: "x",
                expected: expectError("is not float"),
            },
        ],
    },
];
runTestsForCasting(cast, tests);

import { expectError, expectSuccess, runTestsForCasting } from "./../util/testutils";
import { cast } from "./date";

const dt = new Date("2011-01-01 00:00:00");
const tests = [
    {
        describe: "date tests",
        expectations: [
            {
                name: "when value is correct date, should return object Date",
                value: dt.toString(),
                expected: expectSuccess(dt),
            },
            {
                name: "when value is not correct date, should return error",
                value: "x",
                expected: expectError("is not correct date"),
            },
        ],
    },
];
runTestsForCasting(cast, tests);

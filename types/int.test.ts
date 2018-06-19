import { expectError, expectSuccess, runTestsForCasting } from "./../util/testutils";
import { cast } from "./int";

const tests = [{
    describe: "int tests",
    expectations: [{
        name: "when value can be integer, should cast to integer",
        value: "50",
        expected: expectSuccess(50),
    }, {
        name: "hen value can't be integer, should return error",
        value: "x",
        expected: expectError("is not integer"),
    }, {
        name: "when value can't be integer, should return error",
        value: "1.5",
        expected: expectError("is not integer"),
    }],
}];
runTestsForCasting(cast, tests);

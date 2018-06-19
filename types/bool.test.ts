import { expectError, expectSuccess, runTestsForCasting } from "./../util/testutils";
import { cast } from "./bool";

const tests = [{
    describe: "bool tests",
    expectations: [{
        name: "when value is true, return success with `true`",
        value: true,
        expected: expectSuccess(true),
    }, {
        name: "when value is false, return success with `false`",
        value: false,
        expected: expectSuccess(false),
    }, {
        name: "when model is bool and value is not bool should return error",
        value: "x",
        expected: expectError("should be true or false"),
    }],
}];
runTestsForCasting(cast, tests);

import { expectError, expectSuccess, runTestsForCasting } from "./../util/testutils";
import { cast } from "./str";

const tests = [{
    describe: "str tests",
    expectations: [{
        name: "when value is string should return success equal value",
        value: "test",
        expected: expectSuccess("test"),
    }, {
        name: "when value is number should return success value casted to string",
        value: 1.1,
        expected: expectSuccess("1.1"),
    }, {
        name: "when value is not string and not number should return error",
        value: { a: {} },
        expected: expectError("should be string or number"),
    }],
}];
runTestsForCasting(cast, tests);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testutils_1 = require("./../util/testutils");
const str_1 = require("./str");
const tests = [{
        describe: "str tests",
        expectations: [{
                name: "when value is string should return success equal value",
                value: "test",
                expected: testutils_1.expectSuccess("test"),
            }, {
                name: "when value is number should return success value casted to string",
                value: 1.1,
                expected: testutils_1.expectSuccess("1.1"),
            }, {
                name: "when value is not string and not number should return error",
                value: { a: {} },
                expected: testutils_1.expectError("should be string or number"),
            }],
    }];
testutils_1.runTestsForCasting(str_1.cast, tests);

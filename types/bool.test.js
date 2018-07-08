"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testutils_1 = require("./../util/testutils");
const bool_1 = require("./bool");
const tests = [{
        describe: "bool tests",
        expectations: [{
                name: "when value is true, return success with `true`",
                value: true,
                expected: testutils_1.expectSuccess(true),
            }, {
                name: "when value is false, return success with `false`",
                value: false,
                expected: testutils_1.expectSuccess(false),
            }, {
                name: "when model is bool and value is not bool should return error",
                value: "x",
                expected: testutils_1.expectError("should be true or false"),
            }],
    }];
testutils_1.runTestsForCasting(bool_1.cast, tests);

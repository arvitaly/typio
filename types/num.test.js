"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testutils_1 = require("./../util/testutils");
const num_1 = require("./num");
const tests = [
    {
        describe: "num tests",
        expectations: [
            {
                name: "when value can be numeric, should cast to float",
                value: "1.5",
                expected: testutils_1.expectSuccess(1.5),
            },
            {
                name: "when value can't be numeric, should return error",
                value: "x",
                expected: testutils_1.expectError("is not numeric"),
            },
        ],
    },
];
testutils_1.runTestsForCasting(num_1.cast, tests);

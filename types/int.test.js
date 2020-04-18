"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testutils_1 = require("./../util/testutils");
const int_1 = require("./int");
const tests = [
    {
        describe: "int tests",
        expectations: [
            {
                name: "when value can be integer, should cast to integer",
                value: "50",
                expected: testutils_1.expectSuccess(50),
            },
            {
                name: "hen value can't be integer, should return error",
                value: "x",
                expected: testutils_1.expectError("is not integer"),
            },
            {
                name: "when value can't be integer, should return error",
                value: "1.5",
                expected: testutils_1.expectError("is not integer"),
            },
        ],
    },
];
testutils_1.runTestsForCasting(int_1.cast, tests);

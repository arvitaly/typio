"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testutils_1 = require("./../util/testutils");
const float_1 = require("./float");
const tests = [
    {
        describe: "float tests",
        expectations: [
            {
                name: "when value can be float, should cast to float",
                value: "1.5",
                expected: testutils_1.expectSuccess(1.5),
            },
            {
                name: "when value can't be float, should return error",
                value: "x",
                expected: testutils_1.expectError("is not float"),
            },
        ],
    },
];
testutils_1.runTestsForCasting(float_1.cast, tests);

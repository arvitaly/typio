"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testutils_1 = require("./../util/testutils");
const date_1 = require("./date");
const dt = new Date("2011-01-01 00:00:00");
const tests = [
    {
        describe: "date tests",
        expectations: [
            {
                name: "when value is correct date, should return object Date",
                value: dt.toString(),
                expected: testutils_1.expectSuccess(dt),
            },
            {
                name: "when value is not correct date, should return error",
                value: "x",
                expected: testutils_1.expectError("is not correct date"),
            },
        ],
    },
];
testutils_1.runTestsForCasting(date_1.cast, tests);

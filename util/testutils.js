"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestsForCasting = exports.expectSuccess = exports.expectError = void 0;
function expectError(message) {
    return {
        type: "error",
        error: message,
    };
}
exports.expectError = expectError;
function expectSuccess(value) {
    return {
        type: "success",
        value,
    };
}
exports.expectSuccess = expectSuccess;
function runTestsForCasting(cast, tests) {
    for (const test of tests) {
        describe(test.describe, () => {
            for (const expectation of test.expectations) {
                it(expectation.name, () => {
                    if (expectation.expected.type === "success") {
                        expect(cast(expectation.value)).toEqual(expectation.expected);
                    }
                    else {
                        expect(cast(expectation.value)).toEqual(Object.assign(Object.assign({}, expectation.expected), { value: expectation.value }));
                    }
                });
            }
        });
    }
}
exports.runTestsForCasting = runTestsForCasting;

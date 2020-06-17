import {
  expectError,
  expectSuccess,
  runTestsForCasting,
} from "./../util/testutils";
import { cast } from "./num";

const tests = [
  {
    describe: "num tests",
    expectations: [
      {
        name: "when value can be numeric, should cast to float",
        value: "1.5",
        expected: expectSuccess(1.5),
      },
      {
        name: "when value can't be numeric, should return error",
        value: "x",
        expected: expectError("is not numeric"),
      },
    ],
  },
];
runTestsForCasting(cast, tests);

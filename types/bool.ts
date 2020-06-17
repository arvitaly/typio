import { CastResult, TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function cast(value: any): CastResult<boolean> {
  if (value !== true && value !== false) {
    return {
      type: "error",
      error: "should be true or false",
      value,
    };
  }
  return {
    type: "success",
    value,
  };
}

export function bool(...operators: TypioOperator<boolean>[]): boolean {
  return new TypioType(operators, cast, "bool") as any;
}
export default bool;

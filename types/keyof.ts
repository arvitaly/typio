import { CastResult, TypioOperator } from "./../typings";
import { TypioType } from "./../TypioType";

export function cast<T>(enumerate: T, value: any): CastResult<keyof T> {
  if (!Object.keys(enumerate).find((e) => e === value)) {
    return {
      type: "error",
      error: "Not found key in enumerate `" + JSON.stringify(enumerate) + "`",
      value,
    };
  }
  return {
    type: "success",
    value,
  };
}

export function keyof<T>(
  enumerate: T,
  ...operators: TypioOperator<keyof T>[]
): keyof T {
  return new TypioType(
    operators,
    (value) => cast(enumerate, value) as any,
    "keyof",
  ) as any;
}
export default keyof;

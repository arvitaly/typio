import TypioType from "../TypioType";
import { CastResult } from "../typings";

export function cast(value: any): CastResult<void> {
  if (typeof value !== "undefined") {
    return {
      error: "is not undefined",
      type: "error",
      value,
    };
  }
  return {
    type: "success",
    value: undefined,
  } as any;
}
export function empty() {
  return (new TypioType([], cast, "empty") as any) as void;
}
export default empty;

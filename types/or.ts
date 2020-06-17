import { typioValue } from "./../typio";
import { CastResult } from "../typings";
import TypioType from "../TypioType";

export function cast(objs: any[], value: any): CastResult<any> {
  for (const obj of objs) {
    const result = typioValue(value, obj);
    if (result.status === "success") {
      return {
        type: "success",
        value: result.value,
      };
    }
  }
  return {
    error: "is not equal of any model",
    type: "error",
    value,
  };
}
export const or: <T extends any[]>(...models: T) => T[number] = ((
  ...models: any[]
) => {
  return new TypioType([], (value) => cast(models, value) as any, "or") as any;
}) as any;
export default or;

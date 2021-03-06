import { typio } from "./../typio";

export function opt<T>(obj: T): T | undefined | never {
  return ((value: any) =>
    typeof value === "undefined" ? undefined : typio(value, obj as any)) as any;
}
export default opt;

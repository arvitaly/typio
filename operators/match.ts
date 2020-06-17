import { TypioOperator } from "../typings";

interface MatchOperator {
  (regexp: RegExp): TypioOperator<string>;
}

export const match: MatchOperator = ((regexp: RegExp) => {
  return (value: string) => {
    return regexp.test(value)
      ? true
      : "Value should be matched with expression `" + regexp + "`";
  };
}) as any;
export default match;

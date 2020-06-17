export type TypioOperator<T> = ((value: T) => true | false | string) & {
  label: string;
};

export type CastResult<T> =
  | { type: "error"; error?: string; operator?: string; value: T }
  | { type: "success"; value: T };

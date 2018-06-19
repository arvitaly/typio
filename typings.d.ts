export type TypioOperator<T> = ((value: T) => true | string) & { label: string };

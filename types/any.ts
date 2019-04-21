import TypioType from "../TypioType";

export function any() {
    return new TypioType(
        [],
        (value) => ({
            type: "success",
            value,
        }) as any,
        "any",
    ) as any;
}
export default any;

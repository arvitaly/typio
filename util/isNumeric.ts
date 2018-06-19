export function isNumeric(value: any) {
    return isNaN(value) || !isFinite(value);
}

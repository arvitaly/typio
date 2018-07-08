export interface InvalidTypeErrorConfig {
    path: string;
    operator?: string;
    message?: string;
    value: any;
}
export class InvalidTypeError extends Error {
    public config: InvalidTypeErrorConfig;
    public errorStr: string;
    constructor(config: InvalidTypeErrorConfig) {
        const errorStr = formatError(config);
        super(errorStr);
        this.config = config;
        this.errorStr = errorStr;
    }
}
export function formatError(config: InvalidTypeErrorConfig) {
    return (
        "InvalidTypError: \nPath: " +
        config.path +
        (config.operator ? "\nOperator: " + config.operator : "") +
        "\nMessage: " +
        config.message +
        "\nValue: " +
        config.value
    );
}
export default InvalidTypeError;

import { InvalidTypeError } from "./InvalidTypeError";
import { TypioType } from "./TypioType";
import { isPlainObject } from "./util/isPlainObject";

export function typio<T extends any>(obj: any, model: T, path = ""): T {
    if (typeof (model) === "function") {
        return model(obj);
    }
    if (model instanceof TypioType) {
        const res = (model as TypioType<any>).cast(obj);
        if (res.type === "error") {
            throw new InvalidTypeError({
                path,
                message: res.error,
                operator: res.operator,
                value: res.value,
            });
        }
        return res.value;
    }
    if (typeof (model) !== "undefined" && typeof (obj) === "undefined") {
        throw new InvalidTypeError({
            path,
            message: "For model `" + JSON.stringify(model) + "` value should not be undefined",
            value: obj,
        });
    }
    // if array
    if (Array.isArray(model)) {
        if (!Array.isArray(obj)) {
            throw new InvalidTypeError({
                path,
                message: "Object is not array, but model is array",
                value: obj,
            });
        }
        if (model.length === 1) {
            return obj.map((child, index) => typio(child, model[0], `${path}[${index}]`)) as any;
        }
        // tuple
        return model.map((m: any, index: number) => typio(obj[index], m, `${path}[${index}]`));
    }
    if (isPlainObject(model)) {
        if (!isPlainObject(obj)) {
            throw new InvalidTypeError({
                path,
                message: "Object is not plain-object, but model is plain-object",
                value: obj,
            });
        }
        let objKeys = Object.keys(obj);
        const res: any = {};
        Object.keys(model).map((fieldName) => {
            res[fieldName] = typio((obj as any)[fieldName], model[fieldName], `${path}.${fieldName}`);
            objKeys = objKeys.filter((k) => k !== fieldName);
        });
        if (objKeys.length > 0) {
            throw new InvalidTypeError({
                path,
                message: "Unknown keys " + JSON.stringify(objKeys) + " in object `" + JSON.stringify(obj) + "`",
                value: obj,
            });
        }
        return res;
    }
    if (model !== obj) {
        throw new InvalidTypeError({
            path,
            message: "Model `" + model + "` not equal `" + obj + "`",
            value: obj,
        });
    }
    return obj;
}
export default typio;

import { TypioType } from "./TypioType";
import { isPlainObject } from "./util/isPlainObject";

export function typio<T extends any>(obj: any, model: T): T {
    if (typeof (model) === "function") {
        return model(obj);
    }
    if (model instanceof TypioType) {
        return (model as TypioType<any>).cast(obj);
    }
    if (typeof (model) !== "undefined" && typeof (obj) === "undefined") {
        throw new Error("For model " + JSON.stringify(model) + " value should not be undefined");
    }
    // if array
    if (Array.isArray(model)) {
        if (!Array.isArray(obj)) {
            throw new Error("Object is not array, but model is array");
        }
        if (model.length === 1) {
            return obj.map((child) => typio(child, model[0])) as any;
        }
        // tuple
        return model.map((m: any, i: number) => typio(obj[i], m));
    }
    if (isPlainObject(model)) {
        if (!isPlainObject(obj)) {
            throw new Error("Object is not plain-object, but model is plain-object");
        }
        let objKeys = Object.keys(obj);
        const res: any = {};
        Object.keys(model).map((fieldName) => {
            res[fieldName] = typio((obj as any)[fieldName], model[fieldName]);
            objKeys = objKeys.filter((k) => k !== fieldName);
        });
        if (objKeys.length > 0) {
            throw new Error("Unknown keys " + JSON.stringify(objKeys) + " in object `" + JSON.stringify(obj) + "`");
        }
        return res;
    }
    if (model !== obj) {
        throw new Error("Model `" + model + "` not equal `" + obj + "`");
    }
    return obj;
}
export default typio;

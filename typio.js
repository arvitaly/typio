"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidTypeError_1 = require("./InvalidTypeError");
const TypioType_1 = require("./TypioType");
const isPlainObject_1 = require("./util/isPlainObject");
function typioValue(obj, model, path = "") {
    if (typeof model === "function") {
        return {
            status: "success",
            value: model(obj),
        };
    }
    if (model instanceof TypioType_1.TypioType) {
        const res = model.cast(obj);
        if (res.type === "error") {
            return {
                status: "error",
                error: new InvalidTypeError_1.InvalidTypeError({
                    path,
                    message: res.error,
                    operator: res.operator,
                    value: res.value,
                }),
            };
        }
        return { status: "success", value: res.value };
    }
    if (typeof model !== "undefined" && typeof obj === "undefined") {
        return {
            status: "error",
            error: new InvalidTypeError_1.InvalidTypeError({
                path,
                message: "For model `" + JSON.stringify(model) + "` value should not be undefined",
                value: obj,
            }),
        };
    }
    // if array
    if (Array.isArray(model)) {
        if (!Array.isArray(obj)) {
            return {
                status: "error",
                error: new InvalidTypeError_1.InvalidTypeError({
                    path,
                    message: "Value is not array, but model is array",
                    value: obj,
                }),
            };
        }
        const isTuple = model.length > 1;
        const newValues = [];
        for (const [index, child] of obj.entries()) {
            const res = typioValue(child, model[isTuple ? index : 0], `${path}[${index}]`);
            if (res.status === "error") {
                return res;
            }
            newValues.push(res.value);
        }
        return {
            status: "success",
            value: newValues,
        };
    }
    if (isPlainObject_1.isPlainObject(model)) {
        if (!isPlainObject_1.isPlainObject(obj)) {
            return {
                status: "error",
                error: new InvalidTypeError_1.InvalidTypeError({
                    path,
                    message: "Object is not plain-object, but model is plain-object",
                    value: obj,
                }),
            };
        }
        let objKeys = Object.keys(obj);
        const res = {};
        for (const fieldName of Object.keys(model)) {
            const valRes = typioValue(obj[fieldName], model[fieldName], `${path}.${fieldName}`);
            if (valRes.status === "error") {
                return valRes;
            }
            res[fieldName] = valRes.value;
            objKeys = objKeys.filter((k) => k !== fieldName);
        }
        if (objKeys.length > 0) {
            return {
                status: "error",
                error: new InvalidTypeError_1.InvalidTypeError({
                    path,
                    message: "Unknown keys " + JSON.stringify(objKeys) + " in object `" + JSON.stringify(obj) + "`",
                    value: obj,
                }),
            };
        }
        return { status: "success", value: res };
    }
    if (model !== obj) {
        return {
            status: "error",
            error: new InvalidTypeError_1.InvalidTypeError({
                path,
                message: "Model `" + model + "` not equal `" + obj + "`",
                value: obj,
            }),
        };
    }
    return { status: "success", value: obj };
}
exports.typioValue = typioValue;
function typio(obj, model, path = "") {
    const res = typioValue(obj, model, path);
    if (res.status === "error") {
        throw res.error;
    }
    return res.value;
}
exports.typio = typio;
exports.default = typio;

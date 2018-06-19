"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidTypeError_1 = require("./InvalidTypeError");
const TypioType_1 = require("./TypioType");
const isPlainObject_1 = require("./util/isPlainObject");
function typio(obj, model, path = "") {
    if (typeof (model) === "function") {
        return model(obj);
    }
    if (model instanceof TypioType_1.TypioType) {
        const res = model.cast(obj);
        if (res.type === "error") {
            throw new InvalidTypeError_1.InvalidTypeError({
                path,
                message: res.error,
                operator: res.operator,
                value: res.value,
            });
        }
        return res.value;
    }
    if (typeof (model) !== "undefined" && typeof (obj) === "undefined") {
        throw new InvalidTypeError_1.InvalidTypeError({
            path,
            message: "For model `" + JSON.stringify(model) + "` value should not be undefined",
            value: obj,
        });
    }
    // if array
    if (Array.isArray(model)) {
        if (!Array.isArray(obj)) {
            throw new InvalidTypeError_1.InvalidTypeError({
                path,
                message: "Object is not array, but model is array",
                value: obj,
            });
        }
        if (model.length === 1) {
            return obj.map((child, index) => typio(child, model[0], `${path}[${index}]`));
        }
        // tuple
        return model.map((m, index) => typio(obj[index], m, `${path}[${index}]`));
    }
    if (isPlainObject_1.isPlainObject(model)) {
        if (!isPlainObject_1.isPlainObject(obj)) {
            throw new InvalidTypeError_1.InvalidTypeError({
                path,
                message: "Object is not plain-object, but model is plain-object",
                value: obj,
            });
        }
        let objKeys = Object.keys(obj);
        const res = {};
        Object.keys(model).map((fieldName) => {
            res[fieldName] = typio(obj[fieldName], model[fieldName], `${path}.${fieldName}`);
            objKeys = objKeys.filter((k) => k !== fieldName);
        });
        if (objKeys.length > 0) {
            throw new InvalidTypeError_1.InvalidTypeError({
                path,
                message: "Unknown keys " + JSON.stringify(objKeys) + " in object `" + JSON.stringify(obj) + "`",
                value: obj,
            });
        }
        return res;
    }
    if (model !== obj) {
        throw new InvalidTypeError_1.InvalidTypeError({
            path,
            message: "Model `" + model + "` not equal `" + obj + "`",
            value: obj,
        });
    }
    return obj;
}
exports.typio = typio;
exports.default = typio;

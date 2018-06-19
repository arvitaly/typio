"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypioType_1 = require("./TypioType");
const isPlainObject_1 = require("./util/isPlainObject");
function typio(obj, model) {
    if (typeof (model) === "function") {
        return model(obj);
    }
    if (model instanceof TypioType_1.TypioType) {
        return model.cast(obj);
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
            return obj.map((child) => typio(child, model[0]));
        }
        // tuple
        return model.map((m, i) => typio(obj[i], m));
    }
    if (isPlainObject_1.isPlainObject(model)) {
        if (!isPlainObject_1.isPlainObject(obj)) {
            throw new Error("Object is not plain-object, but model is plain-object");
        }
        let objKeys = Object.keys(obj);
        const res = {};
        Object.keys(model).map((fieldName) => {
            res[fieldName] = typio(obj[fieldName], model[fieldName]);
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
exports.typio = typio;
exports.default = typio;

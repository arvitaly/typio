"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = exports.isObjectObject = void 0;
const isObject_1 = require("./isObject");
function isObjectObject(o) {
    return (isObject_1.isObject(o) === true &&
        Object.prototype.toString.call(o) === "[object Object]");
}
exports.isObjectObject = isObjectObject;
function isPlainObject(o) {
    let ctor;
    let prot;
    if (isObjectObject(o) === false) {
        return false;
    }
    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== "function") {
        return false;
    }
    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) {
        return false;
    }
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
}
exports.isPlainObject = isPlainObject;

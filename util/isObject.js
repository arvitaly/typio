"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
function isObject(val) {
    return val != null && typeof val === "object" && Array.isArray(val) === false;
}
exports.isObject = isObject;

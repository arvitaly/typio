import { InvalidTypeError } from "./InvalidTypeError";
import { TypioType } from "./TypioType";
import { isPlainObject } from "./util/isPlainObject";
export function typioValue<T extends any>(
  obj: any,
  model: T,
  path = "",
): { status: "success"; value: T } | { status: "error"; error: any } {
  if (typeof model === "function") {
    return {
      status: "success",
      value: model(obj),
    };
  }
  if (
    (model as any)._____$TYPIO$ === true &&
    (typeof obj !== "undefined" ||
      ((model as any) as TypioType<any>).name === "empty")
  ) {
    const res = ((model as any) as TypioType<any>).cast(obj);
    if (res.type === "error") {
      return {
        status: "error",
        error: new InvalidTypeError({
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
      error: new InvalidTypeError({
        path,
        message:
          "For model `" +
          JSON.stringify(model) +
          "` value should not be undefined",
        value: obj,
      }),
    };
  }
  // if array
  if (Array.isArray(model)) {
    if (!Array.isArray(obj)) {
      return {
        status: "error",
        error: new InvalidTypeError({
          path,
          message: "Value is not array, but model is array",
          value: obj,
        }),
      };
    }
    const isTuple = model.length > 1;
    const newValues: any[] = [];
    for (const [index, child] of obj.entries()) {
      const res = typioValue(
        child,
        model[isTuple ? index : 0],
        `${path}[${index}]`,
      );
      if (res.status === "error") {
        return res;
      }
      newValues.push(res.value);
    }
    return {
      status: "success",
      value: newValues as any,
    };
  }
  if (isPlainObject(model)) {
    if (!isPlainObject(obj)) {
      return {
        status: "error",
        error: new InvalidTypeError({
          path,
          message: "Object is not plain-object, but model is plain-object",
          value: obj,
        }),
      };
    }
    let objKeys = Object.keys(obj);
    const res: any = {};
    for (const fieldName of Object.keys(model)) {
      const valRes = typioValue(
        (obj as any)[fieldName],
        (model as any)[fieldName],
        `${path}.${fieldName}`,
      );
      if (valRes.status === "error") {
        return valRes;
      }
      res[fieldName] = valRes.value;
      objKeys = objKeys.filter((k) => k !== fieldName);
    }
    if (objKeys.length > 0) {
      return {
        status: "error",
        error: new InvalidTypeError({
          path,
          message:
            "Unknown keys " +
            JSON.stringify(objKeys) +
            " in object `" +
            JSON.stringify(obj) +
            "`",
          value: obj,
        }),
      };
    }
    return { status: "success", value: res };
  }
  if (model !== obj) {
    return {
      status: "error",
      error: new InvalidTypeError({
        path,
        message: "Model `" + model + "` not equal `" + obj + "`",
        value: obj,
      }),
    };
  }
  return { status: "success", value: obj };
}
export function typio<T extends any>(obj: any, model: T, path = ""): T {
  const res = typioValue(obj, model, path);
  if (res.status === "error") {
    throw res.error;
  }
  return res.value;
}
export default typio;

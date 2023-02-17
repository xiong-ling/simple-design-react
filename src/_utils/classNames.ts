import { isArray, isObject, isString } from './is';

type ClassNamesArg = string | string[] | { [key: string]: any } | undefined | null | boolean;
/** 
 * @description 合并类名
 */ 
export default function cx(...args: ClassNamesArg[]): string {
  const length = args.length;
  let classNames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    if (!v) {
      continue;
    }
    if (isString(v)) {
      classNames.push(v);
    } else if (isArray(v)) {
      classNames.concat(v);
    } else if (isObject(v)) {
      Object.keys(v).forEach((key) => {
        if (v[key]) {
          classNames.push(key);
        }
      });
    } else {
      console.warn('function cx arguments must be one of string/array/object.');
    }
  }
  return [...new Set(classNames)].join(' ');
}

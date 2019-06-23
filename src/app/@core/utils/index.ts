
/**
 *
 */
export function isDefined(val: any): boolean {
  return typeof val !== 'undefined';
}

/**
 *
*/
export function isNull(val: any): boolean {
  return val === null;
}

/**
 *
 */
export function isObject(value: any): boolean {
  return value != null && typeof value === 'object' && Array.isArray(value) === false;
}

/**
 *
 */
export function isNumber(value: string | number): boolean {
  return ((value != null) && !isNaN(Number(value.toString())));
}

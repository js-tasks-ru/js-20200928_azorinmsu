/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return function (obj) {
    const properties = path.split(".");

    let entries = new Map(Object.entries(obj));
    let entry;

    for (const property of properties) {
      entry = entries.get(property);

      if (entry != null) {
        entries = new Map(Object.entries(entry));
      } else {
        return undefined;
      }
    }

    return entry;
  }
}

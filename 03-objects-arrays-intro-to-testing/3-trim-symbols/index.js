/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size <= 0) {
    return "";
  }

  const symbols = string.split("");

  let prev = "";
  let result = "";
  let count = 1;
  for (const symbol of symbols) {
    if (prev === symbol) {
      count = count + 1;
      if (size < count) {
        count = 1;
        continue;
      }
    } else {
      count = 1;
    }

    result += symbol;
    prev = symbol;
  }

  return result;
}

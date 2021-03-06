/**
 * Returns true if x is monotone
 * @param {Array} array
 * @return {boolean}
 */
export function xIsMonotone(array) {
  if (array.length < 3) return true;
  if (array[0] < array[1]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] >= array[i + 1]) return false;
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] <= array[i + 1]) return false;
    }
  }
  return true;
}

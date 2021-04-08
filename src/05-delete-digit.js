/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = n
    .toString()
    .split('')
    .map((el) => Number(el));

  const min = Math.min(...newArr);
  const index = newArr.indexOf(min);
  if (index > -1) {
    newArr.splice(index, 1);
  }
  return +newArr.join('');
}

module.exports = deleteDigit;

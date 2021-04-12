/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newArr = [];
  let res = 0;

  res += matrix[0].reduce((a, c) => a + c);
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0) {
        newArr.push(matrix[i][j]);
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    res += newArr[i];
  }
  return res;
}

module.exports = getMatrixElementsSum;

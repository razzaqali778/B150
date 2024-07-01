// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees

const rotate = (matrix) => {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
}

// Example usage
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
rotate(matrix)
console.log(matrix)
// Outputs:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

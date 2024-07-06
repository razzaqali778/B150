const sudoku = (board) => {
  function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) {
        return false
      }
    }

    let startRow = 3 * Math.floor(row / 3)
    let startCol = 3 * Math.floor(col / 3)

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[startRow + r][startCol + c] === num) {
          return false
        }
      }
    }

    return true
  }

  function helper(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          for (let num = 1; num <= 9; num++) {
            let char = num.toString()

            if (isValid(board, row, col, char)) {
              board[row][col] = char

              if (helper(board)) {
                return true
              }

              board[row][col] = '.'
            }
          }

          return false
        }
      }
    }
    return true
  }

  helper(board)
}

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

sudoku(board)

console.log(board)

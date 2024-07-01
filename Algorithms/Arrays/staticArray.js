class StaticArray {
  // Insert n into arr at the next open position.
  // Length is the number of 'real' values in arr, and capacity
  // is the size (aka memory allocated for the fixed size array).
  insertEnd(arr, n, length, capacity) {
    if (length < capacity) {
      arr[length] = n
      return length + 1 // Increment length after insertion
    }
    return length // Return unchanged length if array is full
  }

  // Remove from the last position in the array if the array
  // is not empty (i.e. length is non-zero).
  removeEnd(arr, length) {
    if (length > 0) {
      // Overwrite last element with some default value.
      arr[length - 1] = 0
      return length - 1 // Decrement length after removal
    }
    return length // Return unchanged length if array is empty
  }

  // Insert n into index i after shifting elements to the right.
  // Assuming i is a valid index and arr is not full.
  insertMiddle(arr, i, n, length, capacity) {
    if (length < capacity && i >= 0 && i <= length) {
      // Shift starting from the end to i.
      for (let index = length - 1; index >= i; index--) {
        arr[index + 1] = arr[index]
      }
      // Insert at i
      arr[i] = n
      return length + 1 // Increment length after insertion
    }
    return length // Return unchanged length if insertion is not possible
  }

  // Remove value at index i before shifting elements to the left.
  // Assuming i is a valid index.
  removeMiddle(arr, i, length) {
    if (i >= 0 && i < length) {
      // Shift starting from i + 1 to end.
      for (let index = i + 1; index < length; index++) {
        arr[index - 1] = arr[index]
      }
      // Overwrite last element with some default value.
      arr[length - 1] = 0
      return length - 1 // Decrement length after removal
    }
    return length // Return unchanged length if removal is not possible
  }

  printArr(arr, length) {
    let s = ''
    for (let i = 0; i < length; i++) {
      s += arr[i] + ' '
    }
    console.log(s.trim())
  }
}

let staticArray = new StaticArray()
let arr = new Array(10).fill(0) // Array of capacity 10
let length = 0
let capacity = 10

length = staticArray.insertEnd(arr, 5, length, capacity)
length = staticArray.insertEnd(arr, 10, length, capacity)
staticArray.printArr(arr, length) // Outputs: 5 10

length = staticArray.insertMiddle(arr, 1, 7, length, capacity)
staticArray.printArr(arr, length) // Outputs: 5 7 10

length = staticArray.removeEnd(arr, length)
staticArray.printArr(arr, length) // Outputs: 5 7

length = staticArray.removeMiddle(arr, 0, length)
staticArray.printArr(arr, length) // Outputs: 7

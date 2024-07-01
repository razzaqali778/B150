// you are given an array of integers sorted in non decreasing order, find the  starting and ending position of given target value, if target is not found in hte array return [-1,-1] you must write an algo with oLogN runtime complexity

// const searchForrange = function (array, target) {
//   const range = [-1, -1]

//   findLeftExtreame(array, target, range)
//   findRightExtreame(array, target, range)

//   return range
// }

// const findLeftExtreame = function (
//   array,
//   target,
//   range,
//   left = 0,
//   right = array.length - 1
// ) {
//   if (left > right) return

//   const mid = Math.floor((left + right) / 2)

//   if (array[mid] === target) {
//     if (mid === 0) range[0] = 0
//     else if (array[mid - 1] === target) {
//       findLeftExtreame(array, target, range, left, mid - 1)
//     } else {
//       range[0] = mid
//     }
//   } else if (target < array[mid]) {
//     findLeftExtreame(array, target, range, left, mid - 1)
//   } else {
//     findLeftExtreame(array, target, range, mid + 1, right)
//   }
// }

// const findRightExtreame = function (
//   array,
//   target,
//   range,
//   left = 0,
//   right = array.length - 1
// ) {
//   if (left > right) return

//   const mid = Math.floor((left + right) / 2)

//   if (array[mid] === target) {
//     if (mid === array.length - 1) range[1] = mid
//     else if (array[mid + 1] === target) {
//       findRightExtreame(array, target, range, mid + 1, right)
//     } else {
//       range[1] = mid
//     }
//   } else if (target < array[mid]) {
//     findRightExtreame(array, target, range, left, mid - 1)
//   } else {
//     findRightExtreame(array, target, range, mid + 1, right)
//   }
// }

const searchForRange = function (array, target) {
  const range = [-1, -1]

  // Find leftmost index of target
  range[0] = findLeftExtreme(array, target)
  // If the leftmost index is -1, then the target is not present in the array
  if (range[0] !== -1) {
    // Find rightmost index of target
    range[1] = findRightExtreme(array, target)
  }

  return range
}

const findLeftExtreme = function (array, target) {
  let left = 0
  let right = array.length - 1
  let index = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (array[mid] === target) {
      index = mid
      right = mid - 1 // keep searching to the left
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return index
}

const findRightExtreme = function (array, target) {
  let left = 0
  let right = array.length - 1
  let index = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (array[mid] === target) {
      index = mid
      left = mid + 1 // keep searching to the right
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return index
}

// Example usage
let array = [5, 7, 7, 8, 8, 10]
let target = 8
console.log(searchForRange(array, target)) // [3, 4]

target = 6
console.log(searchForRange(array, target)) // [-1, -1]

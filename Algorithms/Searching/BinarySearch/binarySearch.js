function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid

    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

function binarySearchRecursive(arr, target) {
  function helper(arr, target, left, right) {
    if (left > right) return -1

    let mid = Math.floor((left + right) / 2)

    if (target === arr[mid]) return mid
    else if (target < arr[mid]) return helper(arr, target, left, mid - 1)
    else return helper(arr, target, mid + 1, right)
  }

  return helper(arr, target, 0, arr.length - 1)
}

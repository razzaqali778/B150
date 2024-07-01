function interpolationSearch(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low
      return -1
    }

    let pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))

    if (arr[pos] === target) {
      return pos
    }

    if (arr[pos] < target) {
      low = pos + 1
    } else {
      high = pos - 1
    }
  }

  return -1 // Element not found
}

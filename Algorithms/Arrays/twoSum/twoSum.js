function twoSum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j === target]) {
        return [i, j]
      }
    }
  }
}

function twoSumByMap(arr, target) {
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]

    if (map.has(complement)) {
      return [map.get(complement), i]
    }

    map.set(arr[i], i)
  }
}

function twoSumByObj(arr, target) {
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]

    if (obj.hasOwnProperty(complement)) {
      return [obj[complement], i]
    }

    obj[arr[i]] = i
  }
}

function twoSumByPointer(arr, target) {
  const numWithIndices = arr.map((num, index) => ({ num, index }))

  numWithIndices.sort((a, b) => a.num - b.num)

  let left = 0
  let right = numWithIndices.length - 1

  while (left < right) {
    const sum = numWithIndices[left].num + numWithIndices[right].num

    if (sum === target) {
      return [numWithIndices[left].index, numWithIndices[right].index]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
}

function twoSum(nums, target) {
  // Create an array of [value, index] pairs
  const numsWithIndices = nums.map((num, index) => [num, index])

  // Sort the array by the numbers
  numsWithIndices.sort((a, b) => a[0] - b[0])

  // Helper function for binary search
  function binarySearch(arr, target, start) {
    let left = start,
      right = arr.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid][0] === target) {
        return arr[mid][1]
      } else if (arr[mid][0] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return -1
  }

  // Iterate through the array and use binary search to find the complement
  for (let i = 0; i < numsWithIndices.length; i++) {
    const complement = target - numsWithIndices[i][0]
    const index = binarySearch(numsWithIndices, complement, i + 1)
    if (index !== -1) {
      return [numsWithIndices[i][1], index]
    }
  }

  throw new Error('No two sum solution')
}

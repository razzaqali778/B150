function intersection(num1, num2) {
  let set1 = new Set(num1)
  let set2 = new Set(num2)

  let result = []

  for (let num of set2) {
    if (set1.has(num)) {
      result.push(num)
    }
  }

  return result
}

// Example usage
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]
console.log(intersection(nums1, nums2)) // Outputs: [2]

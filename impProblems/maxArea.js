function subarraySum(nums, k) {
  let count = 0

  for (let start = 0; start < nums.length; start++) {
    let sum = 0
    for (let end = start; end < nums.length; end++) {
      sum += nums[end]
      if (sum === k) {
        count++
      }
    }
  }

  return count
}

// Example usage
const nums = [1, 1, 1]
const k = 2
console.log(subarraySum(nums, k)) // Outputs: 2

function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}

// Example usage
const nums = [3, 2, 1, 5, 6, 4]
const k = 2
console.log(findKthLargest(nums, k)) // Outputs: 5

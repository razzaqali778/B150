function maxProduct(nums) {
  let maxProduct = nums[0]
  let minProduct = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      ;[maxProduct, minProduct] = [minProduct, maxProduct]
    }

    maxProduct = Math.max(nums[i], maxProduct * nums[i])
    minProduct = Math.min(nums[i], minProduct * nums[i])
    result = Math.max(result, maxProduct)
  }

  return result
}

// Example usage
const nums = [2, 3, -2, 4]
console.log(maxProduct(nums)) // Outputs: 6

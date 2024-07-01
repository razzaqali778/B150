function productExceptSelf(nums) {
  const length = nums.length
  const output = new Array(length).fill(1)

  // Step 1: Compute left products
  let leftProduct = 1
  for (let i = 0; i < length; i++) {
    output[i] = leftProduct
    leftProduct *= nums[i]
  }

  // Step 2: Compute right products and final output
  let rightProduct = 1
  for (let i = length - 1; i >= 0; i--) {
    output[i] *= rightProduct
    rightProduct *= nums[i]
  }

  return output
}

// Example usage
const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums)) // Outputs: [24, 12, 8, 6]

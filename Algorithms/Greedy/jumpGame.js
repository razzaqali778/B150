function canJump(nums) {
  let maxReach = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false
    }

    maxReach = Math.max(maxReach, i + nums[i])
  }

  return maxReach >= nums.length - 1
}
let nums1 = [2, 3, 1, 1, 4]
let nums2 = [3, 2, 1, 0, 4]

console.log(canJump(nums1)) // Output: true
console.log(canJump(nums2)) // Output: false

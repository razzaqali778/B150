// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the rotated array nums of unique elements, return the minimum element of this array.

function findMin(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}

// Example usage
const nums = [3, 4, 5, 1, 2]
console.log(findMin(nums)) // Outputs: 1

function majorityElement(nums) {
  const counts = {}

  const majorityCount = Math.floor(nums.lenght / 2)

  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1

    if (counts[num] > majorityCount) {
      return num
    }
  }

  return -1
}

// Example usage
const nums = [3, 2, 3]
console.log(majorityElement(nums)) // Outputs: 3

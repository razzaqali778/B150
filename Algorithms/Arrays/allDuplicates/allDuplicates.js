function allDuplicates(nums) {
  let obj = {}
  const res = []

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] + 1
    } else {
      obj[nums[i]] = 1
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 2) {
      res.push(key)
    }
  }

  return res
}

const permute = function (nums) {
  let res = []

  function helper(i) {
    //base case
    if (i === nums.length - 1) {
      res.push([...nums])
      return
    }

    //recurssive
    for (let j = 0; j < nums.length; j++) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      helper(i + 1)
      //backtracking
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  helper(0)

  return res
}

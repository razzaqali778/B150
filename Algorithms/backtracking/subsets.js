//given an integer array of unique elements, return all possible subsets (power sets). the solution set must not contain duplicate subsets. return the solution in any order

function subset(nums) {
  let output = []

  function helper(i, subset) {
    if (i === nums.length) {
      output.push([...subset])
      return
    }

    //recurse without including nums[i]
    helper(i + 1, subset)

    //includeing nums[i] in the subset
    subset.push(nums[i])
    helper(i + 1, subset)

    //backtracking to remove nums[i] and try thr next possibility in the recrussion
    subset.pop()
  }

  helper(0, [])

  return output
}

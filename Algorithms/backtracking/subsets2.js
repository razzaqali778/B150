//samae as subset but input array contains duplicates, but retun should be unique

const subSetWithDuplicates = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)

  function subsets(index, curr) {
    if (index === nums.length) {
      res.push([...curr])
      return
    }

    // include the current number

    curr.push(nums[index])
    subsets(index + 1, curr)

    curr.pop()

    //exclude current number and skip all dplicates
    while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
      index++
    }

    subsets(index + 1, curr)
  }

  subsets(0, [])

  return res
}

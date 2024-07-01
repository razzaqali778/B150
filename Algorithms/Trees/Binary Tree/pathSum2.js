class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

var PathSum = function (root, targetSum) {
  let res = []

  function helper(root, remSum, curr) {
    //base case
    if (root === null) return

    // recursive case
    curr.push(root.val) //even if remSum is negative

    if (remSum === root.val && root.left === null && root.right === null) {
      res.push([...curr])
    } else {
      helper(root.left, remSum - root.val, curr)
      helper(root.right, remSum - root.val, curr)
    }

    curr.pop()
  }

  helper(root, targetSum, [])

  return res
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function isValidBST(root, min = null, max = null) {
  if (root == null) return true
  if (min !== null && root.val <= min) return false
  if (max !== null && root.val <= max) return false

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  )
}

let root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(isValidBST(root)) // Outputs: true

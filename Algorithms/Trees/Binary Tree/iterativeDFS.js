//inorder, post and preorder by iterartive

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

let inOrderTraversal = function (root) {
  let res = []
  let stack = []
  let curr = root

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }
  return res
}

let preOrderTraversal = function (root) {
  let res = []
  let stack = []
  if (root) stack.push(root)

  while (stack.length > 0) {
    let node = stack.pop()
    res.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return res
}

let postOrderTraversal = function (root) {
  let res = []
  let stack = []
  let lastVisited = null
  let curr = root

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    let peekNode = stack[stack.length - 1]
    if (peekNode.right && lastVisited !== peekNode.right) {
      curr = peekNode.right
    } else {
      res.push(peekNode.val)
      lastVisited = stack.pop()
    }
  }
  return res
}

// Example Usage
let root = new TreeNode(20)
root.left = new TreeNode(6)
root.right = new TreeNode(35)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(8)
root.right.left = new TreeNode(27)
root.right.right = new TreeNode(55)
root.left.left.left = new TreeNode(1)
root.left.left.right = new TreeNode(3)
root.right.left.left = new TreeNode(25)
root.right.left.right = new TreeNode(29)
root.right.right.right = new TreeNode(60)

console.log(inOrderTraversal(root)) // [1, 3, 3, 6, 8, 20, 25, 27, 29, 35, 55, 60]
console.log(preOrderTraversal(root)) // [20, 6, 3, 1, 3, 8, 35, 27, 25, 29, 55, 60]
console.log(postOrderTraversal(root)) // [1, 3, 3, 8, 6, 25, 29, 27, 60, 55, 35, 20]

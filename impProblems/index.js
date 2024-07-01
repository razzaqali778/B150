function subsets(nums) {
  const res = [[]] // Initialize result with the empty subset

  function dfs(index, current) {
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]) // Add the current number to the current subset
      res.push([...current]) // Add a copy of the current subset to the result

      dfs(i + 1, current) // Recurse with the next index
      current.pop() // Backtrack by removing the last number added
    }
  }

  dfs(0, []) // Start the DFS with index 0 and an empty subset

  return res // Return the result containing all subsets
}

console.log(subsets([1, 2, 3]))

const permutation = (nums, arr = [], res = []) => {
  if (nums.length === 0) res.push([...arr])

  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => index !== i)

    arr.push(nums[i])
    permutation(rest, arr, res)

    arr.pop()
  }

  return res
}

const permutations = (nums, arr = [], res = []) => {
  if (!nums.length) res.push([...arr])
  nums.forEach((num, i) =>
    permutation(
      nums.filter((_, index) => index !== i),
      [...arr, num],
      res
    )
  )
  return res
}

function combination(n, k) {
  let result = []

  function dfs(index, current) {
    if (current.length === k) {
      result.push([...current])
    }

    for (let i = index; i <= n; i++) {
      current.push(i)

      dfs(i + 1, current)

      current.pop()
    }
  }

  dfs(1, [])

  return result
}

function combination2(k, n) {
  let result = []

  function dfs(index, current, total) {
    if (total < 0 || current.length === k) return

    if (total === 0 && current.length === k) {
      result.push([...current])
    }

    for (let i = index; i <= 9; i++) {
      current.push(i)

      dfs(i + 1, current, total - i)

      current.pop()
    }
  }

  dfs(1, [], n)

  return result
}

function pathSum(root, targetSum) {}

class Node {
  contructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  _minValue(node) {
    let current = node

    while (current.left !== null) {
      current = current.value
    }

    return current.value
  }

  remove(value) {
    this.root = this._removeNode(this.root, value)
  }

  _removeNode(node, value) {
    if (!node) {
      return null
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value)
      return node
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value)
      return node
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      }

      node.value = this._removeNode(node.right)

      node.right = this._removeNode(node.right, node.value)

      return node
    }
  }
}

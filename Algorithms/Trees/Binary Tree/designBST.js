// Design a BST class that supports the following
// Insert a value
// Remove a value, this method should remove firdt occurance of a value
// Find a value if the value is found it should return the node with the value else return false

//                  20
//              /         \
//          6                 35
//         /  \               /  \
//        3    8             27    55
//       / \                 / \     \
//      1   3              25  29     60

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)

    if (!this.root) {
      this.root = node
      return this
    }

    let current = this.root

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current = current.left
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current = current.right
          return this
        }

        current = current.right
      }
    }
  }

  find(value) {
    let current = this.root

    while (current) {
      if (value === current.value) return current

      current = value < current.value ? current.left : current.right
    }
    return false
  }

  remove(value) {
    this.root = this._removeNode(this.root, value)
  }

  _removeNode(node, value) {
    if (!node) return null

    if (value < node.vale) {
      node.left = this._removeNode(node.left, value)
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value)
    } else {
      if (!node.left) return node.right
      if (!node.right) return node.left

      let minNode = node.right

      while (minNode.left) minNode = minNode.left
      node.vale = minNode.value
      node.right = this._removeNode(node.right, minNode.value)
    }
    return node
  }

  //breadth first search
  breadFirst() {
    if (this.root === null) return []
    let array = []
    // queue as array - save time

    let queue = [] //FIFO
    let node = this.root
    queue.push(node)

    while (queue.length > 0) {
      node = queue.shift()
      array.push(node)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return array
  }

  //DFS search

  //left,current, right
  dfsInOrder() {
    if (this.root === null) return []
    const array = []
    let current = this.root

    function trav(node) {
      if (node.left) trav(node.left)
      array.push(node)
      if (node.right) trav(node.right)
    }

    trav(current)

    return array
  }

  //current, left, right
  dfsPreOrder() {
    if (this.root === null) return []
    const array = []
    let current = this.root

    function trav(node) {
      array.push(node)
      if (node.left) trav(node.left)
      if (node.right) trav(node.right)
    }

    trav(current)

    return array
  }

  //left, right, current
  dfsPostOrder() {
    if (this.root === null) return []
    const array = []
    let current = this.root

    function trav(node) {
      if (node.left) trav(node.left)
      if (node.right) trav(node.right)
      array.push(node)
    }

    trav(current)

    return array
  }
}
let bst = new BinarySearchTree()

bst.insert(20)
bst.insert(6)
bst.insert(35)
bst.insert(3)
bst.insert(8)
bst.insert(27)
bst.insert(55)
bst.insert(1)
bst.insert(3)
bst.insert(25)
bst.insert(29)
bst.insert(60)

console.log(bst.find(8)) // Should return the node with value 8
console.log(bst.find(9)) // Should return false

bst.remove(8)
console.log(bst.find(8)) // Should return false

console.log(bst)

//BFS = [20,6,35,3,8,27,,55,1,3,25,29,60]
//dfs inorder [1,3,3,6,8,20,25,27,29,35,55,60]
// dfs preorder [20,6,3,1,3,8,35,]
// dfs postorder [1,3,,3,8,6,25,29,]

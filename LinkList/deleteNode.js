// Write a function to delete a node (except the tail) in a linked list, given only access to that node.
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

  deleteNode(node) {
    if (node && node.next) {
      node.value = node.next.value
      node.next = node.next.next
    }
  }

  print() {
    let current = this.head
    const result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    console.log(result.join(' -> '))
  }
}

// Example usage
const list = new LinkedList()
list.add(10)
list.add(20)
list.add(30)
list.add(40)

list.print() // Output: 10 -> 20 -> 30 -> 40

// Let's say we want to delete node with value 30
let nodeToDelete = list.head.next.next
list.deleteNode(nodeToDelete)

list.print() // Output: 10 -> 20 -> 40

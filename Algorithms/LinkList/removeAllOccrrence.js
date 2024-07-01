// Write a function to remove all nodes with a given value from a linked list
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

  removeAll(value) {
    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let current = this.head
    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next
      } else {
        current = current.next
      }
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
list.add(20)
list.add(30)
list.add(20)
list.add(40)

list.print() // Output: 10 -> 20 -> 20 -> 30 -> 20 -> 40

list.removeAll(20)
list.print() // Output: 10 -> 30 -> 40

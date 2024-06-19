// Write a function to reverse a linked list.

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

  reverse() {
    let prev = null
    let current = this.head
    let next = null
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
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
list.print() // Output: 10 -> 20 -> 30

list.reverse()
list.print() // Output: 30 -> 20 -> 10

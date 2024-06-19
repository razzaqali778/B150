// Define the Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Add a node to the end of the list
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
    this.size++
  }

  // Remove a node with the given value
  remove(value) {
    if (!this.head) return

    if (this.head.value === value) {
      this.head = this.head.next
    } else {
      let current = this.head
      let previous = null
      while (current && current.value !== value) {
        previous = current
        current = current.next
      }
      if (current) previous.next = current.next
    }
    this.size--
  }

  // Check if the list contains a value
  contains(value) {
    let current = this.head
    while (current) {
      if (current.value === value) return true
      current = current.next
    }
    return false
  }

  // Get the value at a specific index
  get(index) {
    if (index < 0 || index >= this.size) return null
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current.value
  }

  // Insert a node at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size) return
    const newNode = new Node(value)
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous = null
      for (let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    this.size++
  }

  // Print the list
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

console.log(list.contains(20)) // Output: true

list.remove(20)
list.print() // Output: 10 -> 30

console.log(list.contains(20)) // Output: false

console.log(list.get(1)) // Output: 30

list.insertAt(25, 1)
list.print() // Output: 10 -> 25 -> 30

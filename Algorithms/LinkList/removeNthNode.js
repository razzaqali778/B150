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

  removeNthFromEnd(n) {
    let dummy = new Node(0)
    dummy.next = this.head
    let first = dummy
    let second = dummy

    for (let i = 0; i <= n; i++) {
      first = first.next
    }

    while (first) {
      first = first.next
      second = second.next
    }

    second.next = second.next.next
    this.head = dummy.next
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
list.add(50)
list.print() // Output: 10 -> 20 -> 30 -> 40 -> 50

list.removeNthFromEnd(2)
list.print() // Output: 10 -> 20 -> 30 -> 50

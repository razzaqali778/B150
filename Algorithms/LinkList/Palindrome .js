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

  isPalindrome() {
    let fast = this.head
    let slow = this.head
    const stack = []

    while (fast && fast.next) {
      stack.push(slow.value)
      slow = slow.next
      fast = fast.next.next
    }

    if (fast) {
      slow = slow.next
    }

    while (slow) {
      const top = stack.pop()
      if (top !== slow.value) {
        return false
      }
      slow = slow.next
    }

    return true
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
list.add(1)
list.add(2)
list.add(3)
list.add(2)
list.add(1)

list.print() // Output: 1 -> 2 -> 3 -> 2 -> 1

console.log(list.isPalindrome()) // Output: true

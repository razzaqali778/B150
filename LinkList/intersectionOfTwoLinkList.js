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

  getIntersectionNode(listA, listB) {
    let a = listA.head
    let b = listB.head

    while (a !== b) {
      a = a ? a.next : listB.head
      b = b ? b.next : listA.head
    }

    return a
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
const listA = new LinkedList()
listA.add(10)
listA.add(20)

const listB = new LinkedList()
listB.add(30)
listB.add(40)

const common = new Node(50)
listA.head.next.next = common
listB.head.next.next = common

common.next = new Node(60)
common.next.next = new Node(70)

const intersectingNode = listA.getIntersectionNode(listA, listB)
console.log(intersectingNode.value) // Output: 50

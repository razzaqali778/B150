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

  merge(otherList) {
    let dummy = new Node(0)
    let tail = dummy
    let a = this.head
    let b = otherList.head

    while (a && b) {
      if (a.value <= b.value) {
        tail.next = a
        a = a.next
      } else {
        tail.next = b
        b = b.next
      }
      tail = tail.next
    }
    tail.next = a || b
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
const list1 = new LinkedList()
list1.add(10)
list1.add(30)
list1.add(50)

const list2 = new LinkedList()
list2.add(20)
list2.add(40)
list2.add(60)

list1.merge(list2)
list1.print() // Output: 10 -> 20 -> 30 -> 40 -> 50 -> 60

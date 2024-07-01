class ListNode {
  contructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

function reverseLinkList(head) {
  let prev = null
  let curr = head

  while (curr !== null) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)

head = reverseLinkList(head)
while (head !== null) {
  console.log(head.value) // Outputs: 5 4 3 2 1
  head = head.next
}

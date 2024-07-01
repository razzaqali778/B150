class ListNode {
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

function mergeTwoList(l1, l2) {
  let dummy = new ListNode()
  let current = dummy

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }

    current = current.next
  }

  current.next = l1 !== null ? l1 : l2
  return dummy.next
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)))
let mergedList = mergeTwoLists(l1, l2)
while (mergedList !== null) {
  console.log(mergedList.value) // Outputs: 1 1 2 3 4 4
  mergedList = mergedList.next
}

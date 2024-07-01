function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

//array to linklist

function arrayToList(arr) {
  let dummyHead = new ListNode(arr[0])

  let current = dummyHead

  for (let val of arr) {
    current.next = new ListNode(val)
    current = current.next
  }

  return dummyHead.next
}

let l1 = arrayToList([2, 4, 3])
let l2 = arrayToList([5, 6, 4])

const addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0)
  let current = head
  let carry = 0

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0
    let y = l2 !== null ? l2.val : 0

    let sum = carry + x + y

    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }
  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return head.next
}
let result = addTwoNumbers(l1, l2)

// Convert the result back to array and print it
console.log(listToArray(result)) // Output should be [7, 0, 8]

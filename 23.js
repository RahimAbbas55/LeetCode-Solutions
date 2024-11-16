/*
    REMOVE DUPLICATES FROM A SORTED LINKED LIST
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
  let temp = head;
  while (temp !== null) {
    if (temp.next !== null && temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};
function printList(head) {
    let current = head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
function main() {
  let head = new ListNode(1);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(3);

  console.log("Original List:");
  printList(head);

  // Remove duplicates
  head = deleteDuplicates(head);

  console.log("\nList after removing duplicates:");
  printList(head);
}

main();

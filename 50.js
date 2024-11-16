/*
    234. Palindrome Linked List

    Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

    Example 1:
    Input: head = [1,2,2,1]
    Output: true

    Example 2:
    Input: head = [1,2]
    Output: false
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var isPalindrome = function (head) {
  if (head === null) return true;
  let convertedArr = [],
    temp = head;
  while (temp !== null) {
    convertedArr.push(temp.val);
    temp = temp.next;
  }
  return convertedArr.join('') === convertedArr.reverse().join('')
};
let node3 = new ListNode(1);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(2, node2);
let head = new ListNode(1, node1);

console.log(isPalindrome(head)); // Expe

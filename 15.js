/*MERGE TWO SORTED LINKED LISTS
You are given the heads of two sorted linked lists list1 and list2.Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.Return the head of the merged linked list.
E.G:
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode ( null , null );
    let head = list3;
    
    while ( list1 !== null &&  list2 !== null )
    {
        if ( list1.val <= list2.val ){
            head.next = list1;
            list1 = list1.next;
        }
        else {
            head.next = list2;
            list2 = list2.next; 
        }
        head = head.next;
    }
    if ( list1 === null ) head.next = list2;
    if ( list2 === null ) head.next = list1;

    return list3.next;
};
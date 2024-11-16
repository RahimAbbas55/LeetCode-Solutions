/*
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
class Solution {
    store(head) {
        let result = [];
        let curr = head;
        while (curr !== null) {
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }

    addRev(number) {
        let num = 0;
        for (let i = 0; i < number.length; i++) {
            num = num * 10 + number[i];
        }

        let reverse = 0;
        while (num !== 0) {
            let digit = num % 10;
            reverse = reverse * 10 + digit;
            num = Math.floor(num / 10);
        }
        return reverse;
    }

    addTwoNumbers(l1, l2) {
        let one = this.store(l1);
        let two = this.store(l2);

        if (one.length === 1 && one[0] === 0 && two.length === 1 && two[0] === 0) {
            // Both lists contain only the number 0
            return new ListNode(0);
        }

        let num1 = this.addRev(one);
        let num2 = this.addRev(two);
        let sum = num1 + num2;

        let finalResult = null;
        let currNode = null;

        while (sum !== 0) {
            let digit = sum % 10;
            sum = Math.floor(sum / 10);
            let newNode = new ListNode(digit);
            if (finalResult === null) {
                finalResult = newNode;
                currNode = finalResult;
            } else {
                currNode.next = newNode;
                currNode = currNode.next;
            }
        }
        return finalResult;
    }
}

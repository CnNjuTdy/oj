/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var flag = 0;
var addTwoNumbers = function(l1, l2) {

    if (!l1.next && !l2.next) {
        var num1 = l1.val;
        var num2 = l2.val;
        if (num1 + num2 < 10) {
            return new ListNode(num1 + num2 + flag);
        } else {
            var temp = new ListNode(1);
            var result = new ListNode((num1 + num2) % 10);
            result.next = temp;
            return result;
        }
    } else if (!l1.next && l2.next) {
        var num1 = l1.val;
        var num2 = l2.val;
        if (num1 + num2 < 10) {
            var temp = l2.next;
            var result = new ListNode(num1 + num2 + flag);
            flag = 0;
            result.next = temp;
            return result;
        } else {
            var temp = l2.next;
            var result = new ListNode((num1 + num2 + flag) % 10);
            flag = 1;
            result.next = addTwoNumbers(new ListNode(1), temp);
            return result;
        }
    } else if (l1.next && !l2.next) {
        var num1 = l1.val;
        var num2 = l2.val;
        if (num1 + num2 < 10) {
            var temp = l1.next;
            var result = new ListNode(num1 + num2 + flag);
            flag = 0;
            result.next = temp;
            return result;
        } else {
            var temp = l1.next;
            var result = new ListNode((num1 + num2 + flag) % 10);
            flag = 1;
            result.next = addTwoNumbers(temp, new ListNode(1));
            return result;
        }
    } else {
        var num1 = l1.val;
        var num2 = l2.val;
        var result = new ListNode((num1 + num2 + flag) % 10);
        if (num1 + num2 < 10) {
            flag = 0;
        } else {
            flag = 1;
        }
        result.next = addTwoNumbers(l1.next, l2.next);
        return result;
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(addTwoNumbers(new ListNode(0), new ListNode(0)));
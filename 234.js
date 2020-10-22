/**
 * 234. 回文链表
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var vals = [];
    var node = head
    while (node != null) {
        vals.push(node.val);
        node = node.next
    }
    console.log(vals);
    for (var i=0; i<parseInt(vals.length/2); i++) {
        if (vals[i] !== vals[vals.length-1-i]) return false;
    }
    return true;
};
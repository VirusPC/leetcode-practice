/**
 * 1. j结果需要额外的头指针
 * 2. 同时遍历：val = p.val + q. val + carry
 * 3. 遍历一个：val = p.val + carray
 * 4. 最后: val = carry
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // head pointer
    const l3 = new ListNode();

    let p = l1;
    let q = l2;
    let r = l3;

    let carry = 0;

    // val = p.val + q.val + carry
    while(p!==null && q !== null){
        let val = p.val + q.val + carry;
        r.next = new ListNode(val%10);
        carry = Math.floor(val/10);
        p = p.next;
        q = q.next;
        r = r.next;
    }

    // val = t.val + carry
    p = p || q;
    while(p!==null){
        let val = p.val + carry;
        r.next = new ListNode(val % 10);
        carry = Math.floor(val / 10);
        p = p.next;
        r = r.next;
    }

    // val = carry
    r.next = carry ? new ListNode(carry) : null;
    return l3.next;
};
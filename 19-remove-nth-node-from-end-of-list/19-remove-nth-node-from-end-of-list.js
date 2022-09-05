/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let resultHead = dummyHead;
    
    let count = 0;
    let tail = head;
    
    while(count < n){
        count++
        tail = tail.next;
    }
    
    let removeNode = head;
    let prev = dummyHead;
    
    while(tail){
        tail = tail.next;
        removeNode = removeNode.next;
        prev = prev.next;
    }
    
    prev.next = removeNode.next;
    
    return resultHead.next
    
};

// Time O(n)
//Space O(1)
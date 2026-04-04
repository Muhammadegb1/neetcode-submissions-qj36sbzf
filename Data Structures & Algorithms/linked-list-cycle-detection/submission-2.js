/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false;
        let head2 = head.next;


        while(head2){
            if(head2 === head) return true;

            head2 = head2.next;
            if(!head2) return false;
            head2 = head2.next;
            head = head.next;
        }
        return false;
    }
}

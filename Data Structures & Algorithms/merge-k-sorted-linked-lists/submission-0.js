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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let result = null;
         for (let i = 0; i < lists.length; i++) {
            result = this.mergeTwoLists(result, lists[i]);
        }

        return result;
    }

    mergeTwoLists(l1, l2) {
        let dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        if (l1) tail.next = l1;
        if (l2) tail.next = l2;

        return dummy.next;
    }


}

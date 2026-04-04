/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        function balanced(node){

             if (!node) return 0; 

            let left = balanced(node.left);
            if (left === false) return false; 

            let right = balanced(node.right);
            if (right === false) return false; 

            if (Math.abs(left - right) > 1) return false; 

            return Math.max(left, right) + 1; 
        }

        return balanced(root) !== false;
    }
}

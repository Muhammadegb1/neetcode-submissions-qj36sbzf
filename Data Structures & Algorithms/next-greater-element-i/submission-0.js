class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const stack = [];
        const nextGreater = new Map();

        for (let i = nums2.length - 1; i >= 0; i--) {
            const current = nums2[i];
            while (stack.length > 0 && stack[stack.length - 1] <= current) {
                stack.pop();
            }

            nextGreater.set(current, stack.length === 0 ? -1 : stack[stack.length - 1]);
            stack.push(current);
        }

        return nums1.map(num => nextGreater.get(num));
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxLen = 0;
        let currentLen = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentLen++;
                maxLen = Math.max(maxLen, currentLen);
            } else {
                currentLen = 0;
            }
        }
        return maxLen;
    }
}

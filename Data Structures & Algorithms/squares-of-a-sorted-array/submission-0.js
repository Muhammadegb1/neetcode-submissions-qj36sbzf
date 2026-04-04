class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let res = [];
        const n = nums.length;
        for (let i = 0, j = n - 1, pos = n - 1; pos >= 0; pos--) {
            res[pos] = Math.abs(nums[i]) > Math.abs(nums[j]) 
                ? nums[i++] ** 2 
                : nums[j--] ** 2;
        }
        return res;
    }
}

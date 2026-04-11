class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const arr = [];

        let l = 0;
        let r = k - 1;

        while (r < nums.length) {
            let maxNum = nums[l];

            for (let i = l; i <= r; i++) {
                maxNum = Math.max(maxNum, nums[i]);
            }

            arr.push(maxNum);

            l++;
            r++;
        }

        return arr;

    }
}

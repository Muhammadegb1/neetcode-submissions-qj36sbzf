class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let sum = 0;
        let minL = Infinity;

        for(let r = 0; r < nums.length; r++){
            sum += nums[r];

            while (sum >= target) {
                minL = Math.min(minL, r - l + 1);
                sum -= nums[l];
                l++;
            }
        }
        return minL === Infinity ? 0 : minL;    }
}

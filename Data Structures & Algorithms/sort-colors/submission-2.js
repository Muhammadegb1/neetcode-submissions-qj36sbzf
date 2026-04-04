class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low_0 = 0, current = 0, high = nums.length - 1;

        while (current <= high){
            if(nums[current] == 0){
                [nums[low_0],nums[current]] = [nums[current] , nums[low_0]]
                low_0++;
                current++;
            }
            else if(nums[current] == 1){
                current++;
            }else{
                [nums[current],nums[high]] = [nums[high], nums[current]]
                high--;
            }
        }
    }
}

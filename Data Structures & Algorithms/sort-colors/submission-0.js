class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red = 0;
        let blue = 0;
        let white = 0
        for(let i = 0; i <nums.length ; i++){
            red += nums[i] == 0 ? 1 : 0;
            white += nums[i] == 1 ? 1 : 0;
            blue += nums[i] == 2 ? 1 : 0;
        }

        let i = 0;
        while (red !== 0){
            nums[i] = 0;
            i++;
            red--;
        }
        while (white !== 0){
            nums[i] = 1;
            i++;
            white --;
        }
        while (blue !== 0){
            nums[i] = 2;
            i++;
            blue--;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let sumL = 0;
        let sumArr = 0;
        for (let i = 0 ; i < nums.length; i++){
            sumArr += nums[i]; 
        }
        for (let i = 0 ; i < nums.length; i++){
            if(sumL ===  sumArr - sumL - nums[i]){
                return i;
            }
            sumL += nums[i];
        }
        return -1;
    }
}

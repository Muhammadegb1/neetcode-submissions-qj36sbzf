class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zero = 0;

        for (const value of nums){
            if(value !== 0) product *= value;
            else zero++;
        }

        if (zero > 1) return Array(nums.length).fill(0);

        let arr = [];
        for (let i = 0; i< nums.length; i++){
            if (zero > 0) {
                arr[i] = nums[i] === 0 ? product : 0;
            }else{
                arr[i] = product / nums[i];
            }
        }
        return arr;
    }
}

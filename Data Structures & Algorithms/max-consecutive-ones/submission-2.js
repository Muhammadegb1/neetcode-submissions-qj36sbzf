class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let countM = 0;
        let count = 0;

        for (const num of nums){
            if(num === 1) {
                count ++;
                countM = Math.max(countM, count)
            }
            else{
                count = 0
            }
        }
        return countM;

    }
}

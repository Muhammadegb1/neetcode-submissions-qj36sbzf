class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0 
        let sorted = nums.sort((a,b) => a - b)
        let max = 1;
        let len = 1;
        for (let i = 1;i < nums.length ; i++){
            if(sorted[i] === sorted[i - 1]) continue;
            else if (sorted[i] === sorted[i - 1] + 1){
                len++
            }else {
                max = Math.max(max,len);
                len = 1;
            }
        }
        max = Math.max(max,len);
        return max;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {        
        // return nums.concat(nums)
        const results = [...nums];
        for (const i of nums){
            results.push(i);
        }
        return results;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const search = target - nums[i];
            if(map[search] !== undefined){
                return [map[search], i];
            }
            map[nums[i]] = i;
        };

        return [];
    }
}

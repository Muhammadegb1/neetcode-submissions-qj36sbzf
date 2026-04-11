class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let appear = Math.floor( nums.length / 3)
        const map = new Map();
        const result = []
        for(let i = 0; i < nums.length ; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        for (let [key, value] of map) {
            if (value > appear) {
                result.push(key);
            }
        }
        return result;
    }
}

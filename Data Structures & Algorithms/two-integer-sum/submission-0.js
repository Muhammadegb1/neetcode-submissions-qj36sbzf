class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arrMap = new Map();
        for (let i = 0 ; i<= nums.length ; i++){
            let num = target - nums[i]; 
            if(arrMap.has(num)){
                return [arrMap.get(num),i]
            }
            arrMap.set(nums[i],i);
        }
    }
}

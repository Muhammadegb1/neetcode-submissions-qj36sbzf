class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i = 0; i < nums.length ; i++){
            map.set(nums[i] , (map.get(nums[i]) || 0) + 1);
        }

        const sorted = [...map.entries()].sort((a,b) => a[1] - b[1]);
        const res = []; 
        while (k > 0){
            res.push(sorted.pop()[0]);
            k--;
        }
        return res;
        

    }
}

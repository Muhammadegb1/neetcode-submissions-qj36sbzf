class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for(const value of nums){
            if(!map.has(value)){
                map.set(value,0)
            }
            map.set(value,map.get(value) + 1)
        }

        const sorted = [...map.entries()].sort((a,b) => b[1] - a[1])
        const result = []
        for(let i=0;i<k;i++){
            result[i] = sorted[i][0]
        }
        return result;

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const myMap = new Map();

        for(const n of nums){
            if (!myMap.has(n)){
                myMap.set(n,0);
            }
            let new_value = myMap.get(n) + 1;
            myMap.set(n, new_value);
            if(new_value > Math.floor( nums.length / 2 )) return n;
        }
        return null;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size < nums.length;
        // const li = new Set();
        // for (const  i of nums){
        //     if (li.has(i)){
        //         return true;
        //     }
        //     li.add(i);
        // }
        // return false;
    }
}

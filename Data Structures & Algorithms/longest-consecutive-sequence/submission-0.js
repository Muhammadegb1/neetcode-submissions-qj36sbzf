class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const setArr = new Set(nums)
        let maxCount = 0;

        for (let num of setArr) {
            if (!setArr.has(num - 1)) { 
                let current = num;
                let count = 1;
                while (setArr.has(current + 1)) {
                    current++;
                    count++
                }
                maxCount = Math.max(maxCount, count);
            }
        }

        return maxCount;
    }
}

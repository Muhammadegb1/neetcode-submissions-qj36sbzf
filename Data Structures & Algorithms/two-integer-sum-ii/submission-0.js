class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1

        while (l < r){
            let s = numbers[l] + numbers[r]
            if (s === target) return [l + 1, r + 1];
            if (s < target) l++;
            else r--;
        }
    }
}

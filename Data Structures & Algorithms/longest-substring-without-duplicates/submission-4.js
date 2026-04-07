class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxL = 0;
        let l = 0;
        let list = new Set()
        for(let r = 0; r < s.length; r++){
            while (list.has(s[r])){
                list.delete(s[l])
                l++;
            }

            list.add(s[r])
            maxL = Math.max(maxL, r - l + 1)
        }
        return maxL;
    }
}

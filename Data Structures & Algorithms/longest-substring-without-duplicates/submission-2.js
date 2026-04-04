class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const list = new Set();
        let left =0;
        let maxLen = 0;
        
        for(let right = 0;right < s.length; right++){
            while (list.has(s[right])){
                list.delete(s[left]);
                left++
            }
            list.add(s[right]);
            maxLen = Math.max(maxLen,right - left + 1)
        }
        return maxLen;
    }
}

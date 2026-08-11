class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let r = s.length - 1;
        let count = 0;
        while (s[r] === " "){
            r--;
        }

        while (s[r] !== " " && r >= 0){
            count++;
            r--;
        }

        return count;
        
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const newArray = new Array(26).fill(0);
        for (let i = 0; i <= s.length ; i++){
            newArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            newArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return newArray.every((val) => val === 0);
    }
}

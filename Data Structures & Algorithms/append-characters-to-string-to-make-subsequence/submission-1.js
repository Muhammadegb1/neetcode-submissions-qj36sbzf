class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0;
        let j = 0;
        
        

        while(i <= s.length - 1){
            if(s[i] === t[j]){
                i++;
                j++;
            }else{
                i++;
            }
        }
        return t.length - j;
    }
}

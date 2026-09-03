class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */


    helper(s,t){
        const map = {};
        for(let i = 0; i < s.length; i ++){
            if(map[s[i]] && map[s[i]] !== t[i]){
                return false;
            }
            map[s[i]] = t[i];
        }
        return true
    }

    isIsomorphic(s, t) {
        return this.helper(s, t) && this.helper(t, s);
    }
}

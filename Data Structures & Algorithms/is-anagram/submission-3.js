class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash = new Map();
        
        if(s.length !== t.length ){
            return false;
        }

        for(const tav of s){
            hash.set(tav, (hash.get(tav) || 0) + 1);
        }

        for(const tav of t){
            if(!hash.has(tav)){
                return false;
            }

            hash.set(tav, hash.get(tav) - 1);

            if(hash.get(tav) < 0){
                return false;
            }
        }

        return true;
    }
}

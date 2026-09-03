class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const subs = [];
        for(let i = 0; i < words.length; i++){
            for(let j = 0 ;j <words.length; j++){
                if(i !== j && words[j].includes(words[i])){
                    subs.push(words[i]);
                    break;
                }
            }
        }
        return subs;
    }
}

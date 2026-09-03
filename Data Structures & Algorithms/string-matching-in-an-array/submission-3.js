class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const sort_words = words.sort((a,b) => a.length - b.length);
        const subs = [];
        for(let i = 0; i < words.length; i++){
            for(let j = i + 1;j <words.length; j++){
                if(sort_words[j].includes(sort_words[i])){
                    subs.push(sort_words[i]);
                    break;
                }
            }
        }
        return subs;
    }
}

class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */ 
    stringMatching(words) {
        const arr = [];
        const sorted = words.sort((a,b) => a.length - b.length);
        for(let i = 0; i < words.length; i++){
            for(let j = i + 1; j < words.length; j++){
                if( sorted[j].includes(sorted[i])){
                    arr.push(sorted[i])
                    break;
                }
            }
        }

        return arr;
    }
}


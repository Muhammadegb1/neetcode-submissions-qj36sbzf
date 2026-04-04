class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const merge = [];
        const len1 = word1.length;
        const len2 = word2.length;
        const maxLen = Math.max(len1, len2);

        for (let i = 0; i < maxLen; i++) {
            if (i < len1) merge.push(word1[i]);
            if (i < len2) merge.push(word2[i]);
        }

        return merge.join("");
    }
}

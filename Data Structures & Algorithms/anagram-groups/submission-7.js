class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = new Map();

        for(const word of strs){
            const arr = new Array(26).fill(0);

            for(const w of word){
                arr[w.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = arr.join("#");
            if(!output.has(key)){
                output.set(key, [])
            }
            output.get(key).push(word);
        }

        return [...output.values()];
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapArr = new Map();
        for (const word of strs){
            const arr = new Array(26).fill(0);
            for (const char of word){
                arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let key = arr.join('#');
            if (!mapArr.has(key)){
                mapArr.set(key,[]);
            }
            mapArr.get(key).push(word);
        }
        return [...mapArr.values()];
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapArr = {};
        for(const word of strs){
            const arr = new Array(26).fill(0);
            for(const char of word){
                arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let key = arr.join('#')
            if (!mapArr[key]){
                mapArr[key]=[];
            }
            mapArr[key].push(word);
        }
        return Object.values(mapArr);
    }
}

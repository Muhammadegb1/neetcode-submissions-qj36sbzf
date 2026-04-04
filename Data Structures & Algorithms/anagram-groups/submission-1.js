class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const arrMap = new Map();
        for(const word of strs){
            const arr = new Array(26).fill(0);
            for (const c of word){
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = arr.join("#");
            if (!arrMap.has(key)){
                arrMap.set(key,[]);
            }
            arrMap.get(key).push(word);
        }

        return [...arrMap.values()]
    }
}

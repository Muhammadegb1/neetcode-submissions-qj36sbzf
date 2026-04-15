class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i =0; i< strs.length; i++){
            const arr = new Array(26).fill(0);

            for (const tav of strs[i]){
                arr[tav.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = arr.join("#");
            if (!map.has(key)){
                map.set(key, []);
            }
            map.get(key).push(strs[i])
        }
        
        return [...map.values()];
    }
}

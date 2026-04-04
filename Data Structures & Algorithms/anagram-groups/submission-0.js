class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const mapArr = new Map();
        for (let s of strs) {
            const newArray = new Array(26).fill(0);
            for (let c of s) {
                newArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = newArray.join("#"); 
            if (!mapArr.has(key)) {
                mapArr.set(key, [s]);   
            } else {
                mapArr.get(key).push(s); 
            }
        }

        return [...mapArr.values()];
    }
}

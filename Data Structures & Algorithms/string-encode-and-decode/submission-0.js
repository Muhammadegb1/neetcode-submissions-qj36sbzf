class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let wordEncoded = '';
        for (const word of strs){
            wordEncoded += word.length + "#" + word; 
        } 
        return wordEncoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let i =0;
        while (i < str.length){
            let j = i;
            while (str[j] !== '#'){
                j++;
            }
            let length =parseInt(str.substring(i,j));
            i = j + 1;
            j = i + length;
            arr.push(str.substring(i,j))
            i=j;
        }
        return arr;
    }
}

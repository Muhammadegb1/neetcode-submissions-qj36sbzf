class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;

        for (const value of details){
            const age = Number(value.substring(11,13));
            if(age > 60){
                count ++;
            }
        }
        return count;
    }
}

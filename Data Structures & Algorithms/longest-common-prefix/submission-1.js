class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return "";
        let common = strs[0];
        let j = 1;
        for(let i = 1; i < strs.length ; i++ ){
            while(strs[i].startsWith(common.substring(0,j)) && j <= common.length){
                j++;
            }
            common = common.substring(0,j - 1);
            j = 1

            if (common === "") return "";
        }

        return common;
    }
}

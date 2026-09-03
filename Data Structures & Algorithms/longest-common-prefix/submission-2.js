class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let common = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let j = 0;

            while (
                j < common.length &&
                j < strs[i].length &&
                common[j] === strs[i][j]
            ) {
                j++;
            }

            common = common.substring(0, j);

            if (common === "") return "";
        }

        return common;
}
}

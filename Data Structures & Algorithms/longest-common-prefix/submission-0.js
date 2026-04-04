class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        // מתחילים מהמחרוזת הראשונה כ־prefix
        let prefix = strs[0];

        // עוברים על כל המחרוזות במערך
        for (let i = 1; i < strs.length; i++) {
            // קיצור prefix עד שהוא מתאים גם למחרוזת הנוכחית
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, prefix.length - 1);
                if (prefix === "") return ""; // אין common prefix
            }
        }

        return prefix;
    }
}

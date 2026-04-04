class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t ) {
        if (t.length > s.length) return "";

        const need = new Map();  
        const window = new Map();

        for (let ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }

        let have = 0;                     
        const needCount = need.size;      

        let res = "";
        let l = 0; 


        for (let r = 0; r < s.length; r++) {

            let ch = s[r];
            window.set(ch, (window.get(ch) || 0) + 1);

            if (need.has(ch) && window.get(ch) === need.get(ch)) {
                have++;
            }

            while (have === needCount) {
                let currentWindow = s.substring(l, r + 1);
                if (res === "" || currentWindow.length < res.length) {
                    res = currentWindow;
                }

                let leftChar = s[l];
                window.set(leftChar, window.get(leftChar) - 1);

                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    have--;
                }

                l++; 
            }
        }

        return res;
    }
}
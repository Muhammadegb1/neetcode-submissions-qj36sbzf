class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        const isPalindrome = (left, right) => {
            while (left < right) {
                if (string[left] !== string[right]) return false;
                left++;
                right--;
            }
            return true;
        };

        let i = 0;
        let j = string.length - 1;

        while (i < j) {
            if (string[i] !== string[j]) {
                return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);
            }
            i++;
            j--;
        }

        return true;
    }
}

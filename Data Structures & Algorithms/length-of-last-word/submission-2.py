class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        r = len(s) - 1;
        while (s[r] == " "):
            r -= 1;  

        count = 0
        while (r >= 0 and s[r] != " "):
            count += 1
            r -= 1
        return count    
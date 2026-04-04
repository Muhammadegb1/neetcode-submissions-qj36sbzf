class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bracket = {
            '[' : ']',
            '(' : ')',
            '{' : '}'
        }
        for (const char of s){
            
            if (bracket[char]){
                stack.push(bracket[char]);
            }
            else {
                if(stack.length === 0 || stack.pop() !== char){
                    return false;
                }
            }
        }
        return stack.length === 0;

    }
}

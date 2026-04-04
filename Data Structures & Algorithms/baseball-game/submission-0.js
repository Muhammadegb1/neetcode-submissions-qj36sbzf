class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(const op of operations){
            if(op === "+"){
                let num1=stack[stack.length - 1];
                let num2=stack[stack.length - 2];
                stack.push(num1+num2);
            }else if(op === "D"){
                 let num=stack[stack.length - 1];
                 stack.push(num*2);
            }
            else if(op === "C")  stack.pop();
            else stack.push(parseInt(op));
        }
       return stack.reduce((sum, cuurentNumber) => sum+cuurentNumber,0);

        
    }
}

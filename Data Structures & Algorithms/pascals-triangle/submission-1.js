class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const arr = [[1]];

        let sum = 1;
        for (let i = 1; i < numRows; i++) {         
            let j = 0;
            arr.push([1]);
            while(j <= i){
                if(i >= 2 && j > 0 && j < i){
                    arr[i].push(arr[i-1][j - 1] + arr[i - 1][j]);
                }
                j++;
            }
            arr[i].push(1);
        }
        return arr;
    }
}
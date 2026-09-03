class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        if(numRows === 1) return [[1]];
        const arr = [];
        
        for(let i = 0; i < numRows; i++){
            const newAr = new Array(i + 1).fill(1);
            let j = 1;
            if( i > 1){
                 while (j < newAr.length - 1){
                    newAr[j] = arr[i - 1][j] + arr[i-1][j-1];
                    j++;
                 }
            }
            arr.push(newAr);
        }
        return arr;
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        for(let i = 0; i < matrix.length; i++){
            if( matrix[i][0] <= target && matrix[i][matrix[0].length -1] >= target ){
                let l = 0;
                let r = matrix[0].length - 1;

                while( l <= r ){
                    const mid = Math.floor( (l + r) / 2 );

                    if (target === matrix[i][mid]) return true;
                    else if(target > matrix[i][mid]) {
                        l = mid + 1;
                    }else{
                        r = mid - 1;
                    }
                }
            }
        }
        return false;
    }
}

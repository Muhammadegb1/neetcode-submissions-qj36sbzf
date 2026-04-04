class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let l = 1, r = n, res = 0;

        while (l <= r){
            let mid = Math.floor((l + r) / 2);
            let coins = (mid * (mid + 1)) / 2;

            if(coins > n) r = mid - 1;
            else {
                l = mid + 1; 
                res = Math.max(mid,res);
            }
        }
        return res;
    }
}

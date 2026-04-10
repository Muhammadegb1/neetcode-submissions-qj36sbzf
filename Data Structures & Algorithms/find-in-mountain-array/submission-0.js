/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let i = 0;
        let j = mountainArr.length() - 1;

        while (i < j ){
            const mid = Math.floor( (i + j) / 2 )

            const midVal = mountainArr.get(mid);
            const nextVal = mountainArr.get(mid + 1);

            if (midVal < nextVal) {
                i = mid + 1;
            } 
            else {
                j = mid;
            }
        }

        let peak = j;

        let left = 0, right = peak;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let val = mountainArr.get(mid);

            if(val === target) return mid;
            if(val < target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }

        left = peak + 1, right = mountainArr.length() - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let val = mountainArr.get(mid);

            if(val === target) return mid;
            if(val > target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }

        return -1;







    }
}

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length;
        let maxSoFar = -1;
        for (let i = n - 1 ; i >= 0; i-- ){
            let current = arr[i];
            arr[i] = maxSoFar;
            if (current > maxSoFar) {
                maxSoFar = current;
            }
        }
        return arr;
    }
}

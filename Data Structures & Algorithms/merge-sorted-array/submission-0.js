class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let j1 = m - 1;
        let j2 = n - 1;
        for (let i = m + n - 1 ; i >= 0; i--){
            if (j2 < 0) break; 
            if (j1 >= 0 && nums1[j1] > nums2[j2]) {
                nums1[i] = nums1[j1];
                j1--;
            } else {
                nums1[i] = nums2[j2];
                j2--;
            }
        }
        
    }
}

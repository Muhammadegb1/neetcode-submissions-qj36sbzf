class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    if (nums.length === 1) return nums[0];
    let l = 0;
    let r = nums.length - 1;

    while (l < r){
        let mid = Math.floor((l + r) / 2)
        if(nums[mid] > nums[mid + 1]) return nums[mid + 1];
        else if(nums[mid] > nums[r]){
            l = mid + 1;
        }else{
            r = mid
        }
    }

    return nums[l];

    }
}

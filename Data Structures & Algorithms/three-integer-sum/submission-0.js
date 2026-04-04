class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const res = [];

        for(let current = 0; current < nums.length ; current++){
            if(nums[current] > 0) break;
            if (current > 0 && nums[current] === nums[current-1]) continue;

            let left = current + 1;
            let right = nums.length - 1;

            while (left < right){
                const sum = nums[current] + nums[left] + nums[right];
                if(sum > 0){
                    right--;
                }else if(sum < 0){
                    left++;
                }else{
                    res.push([nums[current], nums[left], nums[right]]);
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left - 1]){
                        left++;
                    }
                }
            }
        }
        return res;

    }
}

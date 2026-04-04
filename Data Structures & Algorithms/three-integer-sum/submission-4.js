class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) return [];

        let sorted = nums.sort((a,b) => a-b);

        let arr = [];
        let threeSum = 0;
        for (let i =0;i< sorted.length; i++){
            if (i > 0 && sorted[i] === sorted[i - 1])   continue;

            let l = i + 1;  
            let r = nums.length -1;
            while (l < r){
                threeSum = sorted[i] + sorted[l] + sorted[r];
                if (threeSum > 0) r--;
                else if (threeSum < 0) l++;
                else {
                    arr.push([sorted[i], sorted[l], sorted[r]])
                    l++;
                    r--;
                    while (l < r && sorted[l] === sorted[l - 1]){
                        l++;
                    }
                }
            }
        }

        return arr;


    }
}

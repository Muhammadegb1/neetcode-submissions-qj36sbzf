class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        if(nums.length < 4) return [];
        let sorted = nums.sort((a,b) => a - b)
        let fourSum = 0;
        let arr = []; 
        for(let i = 0; i < sorted.length ; i++){
            if(i > 0 && sorted[i] == sorted[i - 1]) continue;
            for(let j = i + 1;j < sorted.length ; j++){
                if(j > i + 1 && sorted[j] == sorted[j - 1]) continue;

                let l = j + 1;
                let r = sorted.length - 1;

                while(l < r){
                    fourSum = sorted[i] + sorted[j] + sorted[l] + sorted[r]
                    if(fourSum > target){
                        r--;
                    }else if(fourSum < target){
                        l++;
                    }else{
                        arr.push([sorted[i] ,sorted[j], sorted[l], sorted[r]])
                        l++;
                        r--;

                        while( l <= r && sorted[l] == sorted[l - 1]){
                            l++;
                        }
                    } 
                }
            }
        }
        return arr;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let left = 0
      let right = heights.length - 1

      let max_space = 0;
      while (left <= right){
        let x = right - left;
        let y = Math.min(heights[left],heights[right]);
        let space = x * y;
        max_space = Math.max(max_space,space);
        if (heights[left] < heights[right]){
            left++;
        }
        else{
            right--;
        }
      }
      return max_space;
    }
}

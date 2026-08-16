class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxC = 0
        count = 0
        for num in nums:
            if num == 1:
                count += 1
                maxC = max(maxC,count)
            else:
                count = 0
        return maxC

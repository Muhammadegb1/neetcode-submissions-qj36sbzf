class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        s = {}
        for i in range(len(nums)):
            search = target - nums[i]
            if search in s:
                return [s[search], i]
            s[nums[i]] = i
        return []
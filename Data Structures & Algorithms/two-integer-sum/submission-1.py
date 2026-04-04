class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        s = {}
        for i in range(len(nums)):
            search = target - nums[i]
            if search not in s:
                s[nums[i]] = i
            else:
                return [s[search], i]
        return []
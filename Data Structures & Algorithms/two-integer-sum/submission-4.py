class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        map = {}

        for i,n in enumerate(nums):
            search = target - n

            if search in map:
                return [map[search], i]
            map[n] = i
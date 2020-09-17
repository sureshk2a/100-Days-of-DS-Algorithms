class Solution:
    def findDuplicate(self, nums):
        for i in nums:
            if nums.count(i) > 1: return i

sln = Solution()
print(sln.findDuplicate([3,1,3,4,2]))
        
#Given a non-empty array of integers, every element appears twice except for one. Find that single one.
# Input: [2,2,1]
# Output: 1

class Solution:
    def singleNumber(self, nums) -> int:
        from collections import Counter
        for i in nums:
            if len(list(filter(lambda x: x==i, nums))) == 1: return i
        
        

sln = Solution()
print(sln.singleNumber([2,6,5,2,1,3,6,3,2,1]))

# Given an integer n and an integer start.
# Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
# Return the bitwise XOR of all elements of nums.
class Solution:
    def xorOperation(self, n, start):
        tempList = []
        for i in range(0,n):
            tempList.append(start + 2*i)



sln = Solution()
sln.xorOperation()




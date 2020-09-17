# Even Number of Digits
# Given an array nums of integers, return how many of them contain an even number of digits.

class Solution:
    def findNumbers(self, nums):
        counter = 0
        for i in nums:
            if int(len(str(i)))%2 == 0: counter+=1
        return counter

sln = Solution()
print(sln.findNumbers([555,901,482,1771]))

# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
# Return the running sum of nums
class Solution:
    def runningSum(self, nums):
        finalList = []
        valueList = []
        for i in nums:
            valueList.append(i)
            finalList.append(sum(valueList))
        return finalList

sln = Solution()
print(sln.runningSum([18,6,13,11,15,16,1,20]))

            


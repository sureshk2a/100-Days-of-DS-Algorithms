#Kids With the Greatest Number of Candies

class Solution:
    def kidsWithCandies(self, candies, extraCandies):
        maxList = []
        for i in candies:
            if 2 >= len(candies) >=100 or 1 >= i >= 100 or 1 >= extraCandies >= 50:
                maxList.append(False)
            elif i+extraCandies >= max(candies):
                maxList.append(True)
            else:
                maxList.append(False)
        return maxList

sln = Solution()
print(sln.kidsWithCandies([2,3,5,1,3],3))

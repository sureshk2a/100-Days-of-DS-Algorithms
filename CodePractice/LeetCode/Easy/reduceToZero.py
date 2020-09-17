# Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it

class Solution:
    def numberOfSteps (self, num):
        isZero = False
        res = 0
        if num == 0:
            return res
        while not isZero:
            if num%2 == 0:
                num = num/2
                res += 1
            else:
                num = num-1
                res += 1
            if num == 0: isZero = True
        return res

sln = Solution()
print(sln.numberOfSteps(8))



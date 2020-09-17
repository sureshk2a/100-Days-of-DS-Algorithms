# Balanced strings are those who have equal quantity of 'L' and 'R' characters.
# Given a balanced string s split it in the maximum amount of balanced strings.
# Return the maximum amount of splitted balanced strings.
class Solution:
    def balancedStringSplit(self, s):
        counter = 0
        lStack = []
        rStack = []
        for i in s:
            if i=="R": rStack.append(i)
            else: lStack.append(i)
            if len(lStack)+len(rStack)%2 == 0 and len(lStack) == len(rStack):
                lStack.clear()
                rStack.clear()
                counter+=1
        return counter


sln = Solution()
print(sln.balancedStringSplit("RLLLLRRRLR"))

#Incomplete

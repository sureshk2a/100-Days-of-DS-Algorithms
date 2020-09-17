# Given a string s and an integer array indices of the same length.
# The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
# Return the shuffled string.
class Solution:
    def restoreString(self, s, indices):
        finalList = []
        batch = {}
        if len(s) == 1:
            return s
        for i in range(0,len(s)):
            batch[indices[i]] = s[i]
        for j in range(0,len(s)):
            finalList.append(batch[j])
        return "".join(finalList)

sln = Solution()
print(sln.restoreString("codeleet",[4,5,6,7,0,2,1,3]))



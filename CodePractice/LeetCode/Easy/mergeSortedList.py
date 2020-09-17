class Solution:
    def mergeTwoLists(self, l1, l2):
        combineLst = l1 + l2
        combineLst.sort()
        return combineLst
            
Sln = Solution()
print(Sln.mergeTwoLists([1,2,4], [1,3,4]))
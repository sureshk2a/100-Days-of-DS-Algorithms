# Binary Number in a Linked List
# Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
# Return the decimal value of the number in the linked list.


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def getDecimalValue(self, head):
        indexs = {}
        tempList = []
        for i in range(len(head)):
            for j in range(len(head),-1,-1):
                indexs[j] = i
        for k in range(len(head),-1,-1):
            tempList.append(indexs[k] * pow(2,k))
        return sum(tempList)
sln = Solution()
print(sln.getDecimalValue([1,0,1]))


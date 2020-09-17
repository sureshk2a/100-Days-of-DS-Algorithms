#Don't convert input into string
class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        if x == x[::-1]:
            return True
        else:
            return False

sln = Solution()
print(sln.isPalindrome(78987))

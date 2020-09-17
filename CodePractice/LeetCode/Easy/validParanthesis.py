class Solution:
    def isValid(self, s: str) -> bool:
        symbols =  {"(":")",
                    "{":"}",
                    "[":"]",
                    ")":"(",
                    "}":"{",
                    "]":"[",}

        paran = {"(":0,
                 ")":0,
                 "{":0,
                 "}":0,
                 "[":0,
                 "]":0}

        for i in s:
            paran[i] += 1
        
        allMatched = True
        for j in s:
            oppositeSymbol = symbols[i]   
            addedValue = paran[i]+paran[oppositeSymbol]
            if addedValue%2 != 0 and addedValue != 0:
                allMatched = False

        return allMatched

sln = Solution()
print(sln.isValid("(){}"))
            
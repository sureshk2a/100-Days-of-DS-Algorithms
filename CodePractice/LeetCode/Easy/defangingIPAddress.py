# Given a valid (IPv4) IP address, return a defanged version of that IP address.
# A defanged IP address replaces every period "." with "[.]".
class Solution:
    def defangIPaddr(self, address):
        if str(address).count("."): return str(address).replace(".","[.]")  

sln = Solution()
print(sln.defangIPaddr("255.100.50.0"))

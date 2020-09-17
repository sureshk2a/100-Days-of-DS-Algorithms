# Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number 
# of valid j's such that j != i and nums[j] < nums[i].
# Return the answer in an array.

def smallerNumbersThanCurrent(nums):
    finalList = []
    for i in range(len(nums)):
        tempList = []
        for j in range(len(nums)):
            if nums[i] == nums[j] or nums[i] < nums[j]:
                continue
            else:
                tempList.append(nums[j])
        finalList.append(len(tempList))
    return finalList

        
print(smallerNumbersThanCurrent([5,0,10,0,10,6]))
        
// function reverse(str)
// {
//     if(typeof str != "string"){
//         return "Incorrect input, only string is accepted"
//     }
//     var reversedString = [];
//     for(var i=str.length;i>=0;i--)
//     {
//         reversedString.push(str[i-1])
//     }
//     return reversedString.join("")
// }

// console.log(reverse("Ay ay captain"))

// function mergeSortedArrays(arr1,arr2){
    
//     var concatArr = arr1.concat(arr2)
//     return concatArr.sort()
// }

// console.log(mergeSortedArrays([1,4,7,3],[5,2,3,8,6]))


function moveZeros(nums)
{
    //Move zeros to end of an array

    for(var i=0;i<nums.length;i++)
    {
        if(nums[i] == 0){
            nums.push(nums[i])
            delete nums[i]
        }
    }
    return nums
}

console.log(moveZeros([0,1,0,3,12]))
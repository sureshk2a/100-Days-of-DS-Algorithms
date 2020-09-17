/**
 * 
 * @param {numbers[]} nums 
 * @returns {boolean}
 */
function moveZeros(nums)
{
    for(var i=nums.length-1;i>=0;i--)
    {
        if(nums[i] == 0){
            nums.push(nums[i])   
            nums.splice(i,1)        
        }       
    }

    return nums
}

function containsDuplicate(nums)
{
    var sorted = nums.sort()
    var hasRepetative = false;
    for(var i=0;i<sorted.length;i++)
    {
        if(sorted[i] == sorted[i+1])
        {
            hasRepetative = true;
        }
    }
    return hasRepetative;
}

function rotate(nums, k)
{
    var newArr = []
    var counter = 1;
    if(nums.length=1)
    {
        return nums
    }
    for(var i =nums.length-1;counter<=k;i--)
    {
        var spliced = nums.splice(i,1)
        nums.unshift(Number(spliced))
        counter++;
    }
    
    return nums
}

function LongestWord(sen){
    sen = sen.replace(/[^\w\s]/gi,"")
    var senArr = sen.split(" ")
    console.log("Splitted: "+senArr)
    if(senArr.length == 1){
        return sen
    }
    var lengthArr = []
    for(var i=0;i<senArr.length;i++){
        lengthArr.push(senArr[i].length)
    }
    console.log("Length arr: "+lengthArr)
    var resndex = lengthArr.indexOf(Math.max.apply(null,lengthArr))
    return senArr[resndex]
}


console.log(LongestWord("fun&!! time"))

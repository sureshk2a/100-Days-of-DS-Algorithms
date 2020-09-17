
//Incomplete
function firstRecurring(nums){
    const constNums = [...nums]
    var tempArr = []
    var tempValue = null
    var steps = {}
    console.log("Length of griven array: "+nums.length)
    for(var i =0;i<nums.length;i++)
    {
        tempArr = [...constNums]
        tempValue = tempArr[i]
        tempArr.splice(i,1)
        //If there is a repedative  
        if(tempArr.includes(tempValue))
        {
            console.log(tempValue+" is recurring in the list");
            var firstOccurance = nums.indexOf(tempValue)
            

        }
    }



}


//firstRecurring([2,1,1,2,3,5,1,2,4])


function test(){
    var map = {}
    for(var i=0;i<10;i++){
        if(!map[i]){
            map[i] = true
        }
    }
    console.log(map)
}
test()
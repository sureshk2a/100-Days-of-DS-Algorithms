//5! = 5*4*3*2*1
function factorialIterativeRecurion(number)
{
    let result = 1;
    if(number == 2)
    {
        result = 2;
    }
    for(var i=2;i<=number;i++)
    {
        result = result * i
    }
    console.log(result);
}

//factorialIterativeRecurion(5);

//Fibonacci Sequence
function recursive(x,n)
{
    let a = 1;
    if(n==1)
    {
        return x;
    }
    else{
        return x *= recursive(x,n-1);
    }
}

//console.log(recursive(3,5));


function addNumbers(n)
{
    return n==10 ? n : n += addNumbers(n+1);
}

console.log(addNumbers(4))
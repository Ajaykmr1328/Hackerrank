function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b)=>a-b)
    var minValues=arr.slice(0,4)
    var maxValues=arr.slice(1)
    const arrSum=arr=>arr.reduce((a,b)=>a+b,0)
    var minSum=arrSum(minValues)
    var maxSum=arrSum(maxValues)
    console.log(minSum,maxSum)
}

function birthdayCakeCandles(candles) {
    // Write your code here
    var max=Math.max(...candles)
    var filtered=candles.filter(function(value,index,ar){
        return value===max
    }) 
    return filtered.length
}

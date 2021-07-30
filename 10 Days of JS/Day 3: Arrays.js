function getSecondLargest(nums) {
    var max=0;
    var secondMax=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>=max){
            secondMax=max;
            max=nums[i];
        }
        else if(nums[i]<max && nums[i]>secondMax){
            secondMax=nums[i]; 
        }
    }
    return secondMax;
}

var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        var number1 = nums[i];
        for(var j=i+1;j<nums.length;j++){
            var number2 = nums[j];
            if(number1+number2==target){
                return [i,j];
            }
        }
    }
};
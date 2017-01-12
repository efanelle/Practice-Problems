var sortColors = function(nums) {
    for (var i = 1; i< nums.length; i++) {
        for (var j = 0; j < i; j ++) {
            if (nums[i]<nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
};
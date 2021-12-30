// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
     const length = nums.length
     let result =[]
     let counter = 0;
     
     for (let index = 0; index <length; index++) {
         if(nums[index]!=0){
          result[counter++]=nums[index];
          }
     }
     for (let index = result.length; index < nums.length; index++) {
          result[index]=0
     }
     console.log(result)
};

moveZeroes([0,1,0,3,12])

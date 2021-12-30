// https://leetcode.com/problems/squares-of-a-sorted-array/


var sortedSquares = function(nums) {
    
     for (let index = 0; index < nums.length; index++) {     
          nums[index] = nums[index]*nums[index]
     }

     for (let index = 0; index < nums.length; index++) {     
          for (let j = index+1; j < nums.length; j++) {     
                 if(nums[j]<nums[index]){
                    let temp = nums[j]
                    nums[j] = nums[index]
                    nums[index] = temp
                 }
          } 
     }
     
     console.log(nums)
};

sortedSquares([-4,-2,-1,0,3,12])

// Time complexity O(n^2)

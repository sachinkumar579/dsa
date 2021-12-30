// https://leetcode.com/problems/maximum-subarray/

var sortedSquares = function(nums) {
    
     let maxSum =  nums[0] 
     const length = nums.length;

     for (let index = 0; index < length; index++) {     
          let sum = 0;
          for (let j = index; j < length; j++) {    
                 sum = sum+nums[j]
                 if(sum>maxSum){
                       maxSum=sum
                  }                 
          } 
     }

     return maxSum;
};

// Not the greatest of solutions because time complexity is O(n^2) 

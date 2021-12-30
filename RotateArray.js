// https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
  
   k = k % nums.length 

   let resultArr = [] 

   for (let index = 0; index < nums.length; index++) {
           resultArr[(index+k)%nums.length] = nums[index]
   }

};

console.log(rotate([1,2,3,4,5,6],6))

// https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
    
     k = k%nums.leng 

     reverse(0,nums,nums.length/2,nums.length-1)
     reverse(0,nums,Math.floor(k/2),k-1)
     reverse(k,nums,(k+nums.length)/2,k+nums.length-1)

     function reverse(start,nums,length,counter){ 
     for (let index = start; index < length; index++) {
       let temp = nums[counter-index]
       nums[counter-index] = nums[index]
       nums[index] = temp  
     }
    }
   console.log(nums)
};

console.log(rotate([1,2,3,4,5],7))

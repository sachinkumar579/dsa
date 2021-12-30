// https://leetcode.com/problems/two-sum/

// Use a map to store the index value and compare the difference with map keys as it is iterated 

var twoSum = function(nums, target) {
     let map = new Map()
     map.set(nums[0],0)
     for (let index = 1; index < nums.length; index++) {
           if(map.has(target-nums[index])){
               return [index,map.get(target-nums[index])]
           }
           map.set(nums[index],index)
     }
};

// Time complexity O(n)

var twoSum = function(nums, target) {
    
    for (let index = 0; index < nums.length; index++) {
    for (let j = index+1; j < nums.length; j++) {
           if(nums[index]+nums[j]==target)
            return [index,j]
    }
    }
};


// Time complexity O(n^2)

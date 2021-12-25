# Data Structures and Algorithms

- [Binary Search](#BinarySearch)

# BinarySearch 

https://leetcode.com/problems/search-insert-position/

      const find =(nums,target)=>{
      let low = 0
      let high = nums.length-1
      let mid = Math.floor((low+high)/2)
      let counter = 0 

      while(counter<Math.sqrt(nums.length+1)){
       counter+=1
       if(target==nums[mid]) return mid
       else if(target<nums[mid]) high = mid-1
       else if(target>nums[mid]) low = mid+1
       mid = Math.floor((low+high)/2)
      }
      return low;
     }

     console.log(find([1,3,4,7,8,9,13,34,67,89],89))

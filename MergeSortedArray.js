// https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {

      for (let index = 0; index<n ; index++) {        
          nums1[m+index]=nums2[index]
      }
 
      for (let i = 0; i < m+n; i++) {
        for (let j = i+1; j < m+n; j++) {
               if(nums1[j]<nums1[i]){
                   let temp = nums1[i]
                   nums1[i] = nums1[j]
                   nums1[j] = temp
               }
        }  
     }

     console.log('---',nums1)
      
    }

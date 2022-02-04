# Data Structures and Algorithms

- [Binary Search](#BinarySearch)
- [Fibonacci Number](#FibonacciNumber)
- [Pascal Numbers](#PascalNumbers)
- [Running Sum Of 1D Array](#RunningSumOf1DArray)
- [Shuffle Array](#ShuffleArray)
- [Reverse A String](#ReverseAString)
- [Matrix DiagonalSum](#MatrixDiagonalSum) 
- [Reverse Integer](#ReverseInteger)
- [Greatest Number Of Candies](#GreatestNumberOfCandies)
- [Jewels And Stones](#JewelsAndStones)
- [Merge Sorted Array](#MergeSortedArray)
- [Max Product of 2 numbers in an Array](#MaxProduct)
- [Missing Number](#MissingNumber)
- [Majority Finder](#MajorityFinder)

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
     
# FibonacciNumber

https://leetcode.com/problems/fibonacci-number/

        let fib = (n)=>{
            let num1=0
            let num2=1
            let sum =0;

            if(n==1)
              return 1

            for(let i=0;i<n-1;i++){
              sum = num2+num1
              num1=num2
              num2=sum   
            }
        return sum
        }
   
 # PascalNumbers
 
 https://leetcode.com/problems/pascals-triangle/

          const generate = function (numRows) {
              let pascal = [[1]];
              for (var i = 1; i < numRows; i++) {
              pascal[i] = [1]; // 1st element of all the rows is 1
              for (var j = 1; j < i; j++) {
                 pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
              }

              pascal[i][i] = 1; // last element of all the rows is 1
              console.log(...pascal)  
           }
           return pascal;
           };
           console.log(generate(10))

# RunningSumOf1DArray

https://leetcode.com/problems/running-sum-of-1d-array/

           let n =[3,1,2,10,1]
           let sumArr = []
           let sum = 0

           for(let i =0;i<n.length;i++){
             sumArr.push(sum+n[i])
             sum=sum+n[i] 
           }

           console.log(sumArr)

# ShuffleArray

https://leetcode.com/problems/shuffle-the-array/

           let arr = [1,2,3,7,4,5,5,8]
           let res = []

           for(let i=0;i<arr.length/2;i++){ 
               res[i*2]=arr[i]
               res[i*2+1] =arr[arr.length/2+i]
           }
           console.log(res)

# ReverseAString

https://leetcode.com/problems/reverse-string/submissions/

     class Solution {
         public void reverseString(char[] str) {
           for(int i=0;i<str.length/2;i++){
            char t = str[str.length-1-i];
            str[str.length-1-i]=str[i];
            str[i]=t;
         }
       }
     }

# MatrixDiagonalSum

https://leetcode.com/problems/matrix-diagonal-sum/

    let mat = [[1,2,3],[4,5,6],[7,8,9]]
    let sum = 0

    for(let i =0;i<mat.length;i++){
      if(i!=mat.length-1-i)
       sum = sum + mat[i][i]+mat[i][mat.length-1-i]
         else 
       sum = sum+mat[i][i]
    }

    console.log(sum)

# ReverseInteger

https://leetcode.com/problems/reverse-integer/

       public static int reverse(int x) {
        int rev = 0;
        int rem = 0;

        while(x!=0){
            rem = x%10;
            x=x/10;
            if(rev>Integer.MAX_VALUE/10 || rev<-Integer.MIN_VALUE/10)
                return 0;
            rev = rev *10 +rem;
        }


        return  rev;
      }
      
      
# GreatestNumberOfCandies

https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

     var kidsWithCandies = function(candies, extraCandies) {
  
     let large= Math.max(candies)
     
     for(let i=0;i<candies.length;i++){
       if(candies[i]+extraCandies>=large)
           candies[i]=true
           else
           candies[i]=false
     }
     
     return candies;

    };

# JewelsAndStones

https://leetcode.com/problems/jewels-and-stones/

     var numJewelsInStones = function(jewels, stones) {
           let count = 0;
              for(str of stones)
               {
                for(strs of jewels){
                   if(str===strs){
                   count+=1;
                   break;
               }
             }
          }

        return count; 
     };

#  MergeSortedArray

https://leetcode.com/problems/merge-sorted-array/submissions/

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

     console.log(nums1)
      
    }
    
    Time complexity - O(m^2 + n^2)
    
    
    var merge = function(nums1, m, nums2, n) {
    
     let num2Ind = n-1
     let num1Ind = m-1
     let i = m+n-1

     while(num2Ind>=0) { 
       if(nums1[num1Ind]>nums2[num2Ind])
          {
          nums1[i]=nums1[num1Ind]
          num1Ind-=1
          }
      else{
        nums1[i]=nums2[num2Ind]
        num2Ind-=1
      }
       i-=1 
     }     
    
    return nums1;
    };
    
    Time complexity - O(m+n)
    
# MaxProduct

https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

      var maxProduct = function(nums) {
    
      let numsArr = nums.sort((a,b)=>a-b)
      return (numsArr[nums.length-1]-1)*(numsArr[nums.length-2]-1)
    
      };
      
# MissingNumber

https://leetcode.com/problems/missing-number/
  
    var missingNumber = function(nums) {

    let sum = 0;

    for(let i=0;i<nums.length;i++){
        sum = sum+nums[i];      
    }

    return nums.length*(nums.length+1)/2-sum
 
    };
      
# MajorityFinder

https://leetcode.com/problems/majority-element/submissions/

     var majorityElement = function(nums) {
    
     let map = new Map()
     for (let index = 0; index < nums.length; index++) {
              if(map.has(nums[index])){
                      map.set(nums[index],map.get(nums[index])+1)
              } else{
                map.set(nums[index],1)
              }
     } 

     let max =0 , maxKey;
     map.forEach((value,key)=>{
       if(value>max){
         max = value
         maxKey = key
       }
     })

     return maxKey; 
    
    };

# Data Structures and Algorithms

- [Binary Search](#BinarySearch)
- [Fibonacci Number](#FibonacciNumber)
- [Pascal Numbers](#PascalNumbers)
- [Running Sum Of 1D Array](#RunningSumOf1DArray)
- [ShuffleArray](#ShuffleArray)

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


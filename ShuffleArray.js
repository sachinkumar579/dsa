https://leetcode.com/problems/shuffle-the-array/

 let arr = [1,2,3,7,4,5,5,8]
   let res = []

   for(let i=0;i<arr.length/2;i++){ 
       res[i*2]=arr[i]
       res[i*2+1] =arr[arr.length/2+i]
    }
  console.log(res)

   

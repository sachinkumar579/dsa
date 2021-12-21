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

let n =[3,1,2,10,1]
   let sumArr = []
   let sum = 0

   for(let i =0;i<n.length;i++){
     sumArr.push(sum+n[i])
     sum=sum+n[i] 
   }

console.log(sumArr)

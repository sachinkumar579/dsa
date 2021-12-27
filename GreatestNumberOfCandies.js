// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

    let candiesArr = [...candies]
     let large= candies.sort((a,b)=> a-b)[candies.length-1]
     let newArr =[];
     
     for(let i=0;i<candies.length;i++){
       if(candiesArr[i]+extraCandies>=large)
           newArr[i]=true
           else
           newArr[i]=false
     }
     
     return newArr;

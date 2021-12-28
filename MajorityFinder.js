// https://leetcode.com/problems/majority-element/

// Using Randomization 
var majorityElement = function (nums) {

           let map = new Map();
           let max=0,key

           for(let i = 0 ; i<500;i++){
           let r = Math.random()
           let num = arr[Math.floor(r*nums.length)]
               if(map.has(num))
                 map.set(num,map.get(num)+1)
                 else
                 map.set(num,1)
               }

                map.forEach((val,k)=>{                    
                     if(max<val){
                          max=val
                          key = k
                     }
              });
              console.log(key)
};

let arr = [50,50,50,50,50,1,1,2,1,1,1,1,1,1,50,50,50,50,50,50,50,2];
majorityElement(arr);




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

// https://leetcode.com/problems/jewels-and-stones/

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

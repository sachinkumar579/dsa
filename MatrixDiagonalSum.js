// https://leetcode.com/problems/matrix-diagonal-sum/

let mat = [[1,2,3],[4,5,6],[7,8,9]]
let sum = 0

for(let i =0;i<mat.length;i++){
  if(i!=mat.length-1-i)
  sum = sum + mat[i][i]+mat[i][mat.length-1-i]
  else 
  sum = sum+mat[i][i]
}

console.log(sum)

// https://leetcode.com/problems/pascals-triangle/

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

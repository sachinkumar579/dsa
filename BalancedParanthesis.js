// Problem statement https://www.linkedin.com/pulse/handling-classic-parenthesis-matching-problem-javascript-rohan-paul/

    const openParanthesis = ["(", "{", "["];
    let isBalanced = true;
    let stack = [];

    const checkIsBalanced = (inp) => {
      inp.split("").forEach((character) => {
        if (openParanthesis.includes(character)) {
          stack.push(character);
        } else if (
          (character == "}" && !(stack.pop() == "{")) ||
          (character == ")" && !(stack.pop() == "(")) ||
          (character == "]" && !(stack.pop() == "["))
        ) {
          isBalanced = false;
        }
      });

      if (stack.length > 0) {
        isBalanced = false;
      }

      return isBalanced;
    };

    console.log(checkIsBalanced("()[]()((((()))))[][][]{{{}}}"));

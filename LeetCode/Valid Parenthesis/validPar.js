function validPar(str) {
  let store = [];
  for (let i = 0; i < str.length; i++) {
    if ([i] == "(" || [i] == "{" || [i] == "[") store.push(i);
    if ([i] == ")" || [i] == "}" || [i] == "]") store.pop;
  }
}
console.log(validPar("()[]{}"));

// Algorithm:

// Declare a character stack S.
// Now traverse the expression string exp.
// If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
// If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else brackets are not balanced.
// After complete traversal, if there is some starting bracket left in stack then “not balanced”

function areBracketsBalanced(expr) {
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // Check Empty Stack
  return stack.length == 0;
}

// // Driver code
// let expr = "([{}])";

// // Function call
// if (areBracketsBalanced(expr)) document.write("Balanced ");
// else document.write("Not Balanced ");

// This code is contributed by rag2127
console.log(areBracketsBalanced("([{}])"));

//Couldnt get the switch statement to work 😔

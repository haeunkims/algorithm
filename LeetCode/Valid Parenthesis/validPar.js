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

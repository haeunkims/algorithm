function longComPre(arr) {
  for (let i = 0; i < arr.length; i++) {
    // for(let j = 0; j < )
    console.log(arr[i]);
  }
}
console.log(longComPre(["flower", "flour", "Fly", "Fax"]));
//pseudo code
//loop through each str
// compare first letter of each string
// if first letter equal to 0 return " "
//have a counter to store letter --> counter ++
// return the largest amount

// solution found online *
//var longestCommonPrefix = function (strs) {
// Return early on empty input
//     if (!strs.length) return '';

//     // Loop through the letters of the first string
//     for (let i = 0; i <= strs[0].length; i++) {
//         // Loop through the other strings
//         for (let j = 1; j < strs.length; j++) {
//             // Check if this character is also present in the same position of each string
//             if (strs[0][i] !== strs[j][i]) {
//                 // If not, return the string up to and including the previous character
//                 return strs[0].slice(0, i);
//             }
//         }
//     }

//     return strs[0];
// };

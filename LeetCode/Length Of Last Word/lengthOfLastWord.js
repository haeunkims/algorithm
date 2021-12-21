const lengthOfLastWord = function (s) {
  let str = s.trim().split(" ");
  let last = str.splice(-1).toString("");
  return last.length;
};
console.log(lengthOfLastWord("Hello World"));

//Runtime: 64 ms, faster than 96.79% of JavaScript online submissions for Length of Last Word.

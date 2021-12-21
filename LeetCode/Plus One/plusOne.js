const plusOne = function (digits) {
  let num = BigInt(digits.join("")) + 1n;
  let nums = Array.from(String(num), Number);
  return nums;
};
console.log(plusOne([1, 2, 3]));
//Runtime: 76 ms, faster than 53.39% of JavaScript online submissions for Plus One.

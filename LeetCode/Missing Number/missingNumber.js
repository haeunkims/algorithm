const missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== i) return i;
  }
};
console.log(missingNumber([0, 1]));

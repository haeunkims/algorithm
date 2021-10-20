function mostDigits(nums) {
  let maxDig = 0;
  for (let i = o; i < nums.length; i++) {
    maxDig = Math.max(maxDig, digitCount(nums[i]));
  }
  return maxDig;
}

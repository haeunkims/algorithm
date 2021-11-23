function productExceptSelf(nums) {
  const answer = [];
  const left = [];
  const right = [];

  console.log(nums);
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  right[nums.length - 1] = 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));

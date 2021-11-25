function maxSubarray(nums) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/* Solution was found on the internet. 
  Why I couldn't solve it: Was trying to use a sliding window approach by increasing the window +1 if sum was less than the current maxsum. Did not work. 
  What I learned: Learn how to use Math methods more. The code makes a lot of sense  */

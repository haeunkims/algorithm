function maxSubarraySum(arr, num) {
  let temp = 0;
  let maxSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  temp = maxSum;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

//Could not solve problem: Reasons (line 11) did not know how to slide the window so that the previous first index would be subtracted from the temp.

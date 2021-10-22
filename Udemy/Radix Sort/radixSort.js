function radixSort(nums) {
  let maxCount = mostDigits(nums);
  console.log(nums);
  for (let k = 0; k < maxCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    console.log(buckets);
    nums = [].concat(...buckets);
    console.log(nums);
  }
  return nums;
}
console.log(radixSort([12, 111, 34, 2, 546, 5684]));

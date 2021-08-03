const twoSum = function (nums, target) {
  const arr = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        arr.push(i, j);
        return arr;
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

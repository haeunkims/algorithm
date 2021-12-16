const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  for (let i = 0; i < nums.length; i++) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (target > nums[nums.length - 1]) return nums.length;
  else if (target < nums[0]) return 0;
  else if (target > nums[mid]) return mid + 1;
  else if (target < nums[mid]) return mid - 1;
};
console.log(searchInsert([1, 3, 4, 5, 6], 2));

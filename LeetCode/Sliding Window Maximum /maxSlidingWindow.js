const maxSlidingWindow = (nums, k) => {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);

    // When i + 1 - k >= 0, the window is fully overlapping nums
    const j = i + 1 - k;
    if (j >= 0) {
      res.push(q[0]);
      if (nums[j] === q[0]) q.shift(); // If the biggest element in q is about to exit window, remove it from q
    }
  }
  return res;
};
//DID NOT SOLVE
// const maxSlidingWindow = function (nums, k) {
//     let arr = [];
//     let answ = [];
//     let maxNum = 0;
//     let temp = 0;
// if (nums.length < k) return false;
//find sum;
// for (let i = 0; i < k; i++) {
//   arr.push(nums[i]);
//   maxNum = Math.max(...arr);
// }
// answ.push(maxNum);
// start from most left to right
// for (let i = k; i < nums.length; i++) {
//create a sliding window (temp)
//   temp = temp - nums[i - k] + nums[i];
//find max in each window
// arr.push(temp);
// maxNum = Math.max(...arr);
// console.log(...temp);
//push max in to answ;
//return answ;
//     }
//     console.log(arr);
//     answ.push(maxNum)
//   };
//   console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
/* The bottom code was how i tried to implement the algorithm. How I implemented my window did not allow me to view every subarray that was created from each window. The solution at the top used Monotonic queue. Did not think about using a queue to solve this algorithm.
 */

<p>You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.</p>
<p>Return the max sliding window.</p>
<p>Example 1:</p>
<p>Input: nums = [1,3,-1,-3,5,3,6,7], k = 3</p>
<p>Output: [3,3,5,5,6,7]</p>
<p>Explanation: </p>
<p>Window position                Max</p>
<p>---------------               -----</p>
<p>[1  3  -1] -3  5  3  6  7       3</p>
<p> 1 [3  -1  -3] 5  3  6  7       3</p>
<p> 1  3 [-1  -3  5] 3  6  7       5</p>
<p> 1  3  -1 [-3  5  3] 6  7       5</p>
<p> 1  3  -1  -3 [5  3  6] 7       6</p>
<p> 1  3  -1  -3  5 [3  6  7]      7</p>

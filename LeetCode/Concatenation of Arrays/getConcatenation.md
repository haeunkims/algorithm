<p>Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).</p>

<p>Specifically, ans is the concatenation of two nums arrays.</p>

<p>Return the array ans.</p>
<p>Example 1:</p>

<p>Input: nums = [1,2,1]</p>
<p>Output: [1,2,1,1,2,1]</p>
<p>Explanation: The array ans is formed as follows:</p>
<p>- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]</p>
<p>- ans = [1,2,1,1,2,1]</p>

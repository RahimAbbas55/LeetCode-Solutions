/*
TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
class Solution {
    twoSum(nums, target) {
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                sum += nums[j];
                if (sum === target) {
                    result.push(i);
                    result.push(j);
                    return result;
                } else {
                    sum -= nums[j];
                }
            }
        }
        return result;
    }
}
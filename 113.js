/*
    628. Maximum Product of Three Numbers
    Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
    Example 1:
        Input: nums = [1,2,3]
        Output: 6
    Example 2:
        Input: nums = [1,2,3,4]
        Output: 24
    Example 3:
        Input: nums = [-1,-2,-3]
        Output: -6
    Constraints:
        3 <= nums.length <= 104
        -1000 <= nums[i] <= 1000
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   // O(nlogn) approach
    // nums = nums.sort((a, b) => b - a);
    // // Case 1: Top 3 largest numbers
    // const product1 = nums[0] * nums[1] * nums[2];
    // // Case 2: Two smallest (possibly negative) and the largest number
    // const product2 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];
    // return Math.max(product1, product2);

    //O(n) approach
    // Initialize to extreme values
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (let num of nums) {
        // Track top 3 max numbers
        if (num > max1) {
            [max3, max2, max1] = [max2, max1, num];
        } else if (num > max2) {
            [max3, max2] = [max2, num];
        } else if (num > max3) {
            max3 = num;
        }

        // Track lowest 2 numbers (possibly negative)
        if (num < min1) {
            [min2, min1] = [min1, num];
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);

};
console.log(maximumProduct([1 , 2 , 3])); 
console.log(maximumProduct([1 , 2 , 3 , 4])); 
console.log(maximumProduct([-1 , -2 , -3])); 
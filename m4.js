/*
    15. 3Sum
        Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
        and nums[i] + nums[j] + nums[k] == 0.
        Notice that the solution set must not contain duplicate triplets.
    Example 1:
        Input: nums = [-1,0,1,2,-1,-4]
        Output: [[-1,-1,2],[-1,0,1]]
        Explanation: 
        nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
        nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
        nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
        The distinct triplets are [-1,0,1] and [-1,-1,2].
        Notice that the order of the output and the order of the triplets does not matter.
    Example 2:
        Input: nums = [0,1,1]
        Output: []
        Explanation: The only possible triplet does not sum up to 0.
    Example 3:
        Input: nums = [0,0,0]
        Output: [[0,0,0]]
        Explanation: The only possible triplet sums up to 0.
    Constraints:
        3 <= nums.length <= 3000
        -105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    // Sort the array. O(nlogn) Time
    nums.sort(
        (a , b) => a - b
    )
    for ( let i = 0 ; i < nums.length ; i++ ){
        // Check if i is in bounds and there is no duplicate with i and its previous element
        if ( i > 0 && nums[i] === nums[i - 1] ){
            continue;
        }
        // Start left from exactly 1 next of i and right from the end of array
        let left = i + 1 , right = nums.length - 1;
        // This is important. If we make it (left <= right), it'll check for same indices as well which will return wrong answer
        while ( left < right ){
            let sum = nums[i] + nums[left] + nums[right];
            // Condition reached
            if ( sum === 0 ){
                result.push([nums[i] , nums[left] , nums[right]]);
                // 2 while loops to check if there are no duplicates after and before of left and right respectively
                while ( left < right && nums[left] === nums[left + 1] ) left++;
                while ( left < right && nums[right] === nums[right -1] ) right--;
                // update pointers
                left++;
                right--;
            }
            // decrement right pointer by 1
            else if ( sum > 0 ){
                right--;
            }
            // increment left pointer by 1
            else {
                left++;
            }
        }
    }
    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0,0,0]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0, 0, 0, 0]));
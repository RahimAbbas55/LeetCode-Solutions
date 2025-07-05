/*
    697. Degree of an Array
    Given a non-empty array of non-negative integers nums, the degree of this array is defined as the 
    maximum frequency of any one of its elements.Your task is to find the smallest possible length of a 
    (contiguous) subarray of nums, that has the same degree as nums.
    Example 1:
        Input: nums = [1,2,2,3,1]
        Output: 2
        Explanation: 
        The input array has a degree of 2 because both elements 1 and 2 appear twice.
        Of the subarrays that have the same degree:
        [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
        The shortest length is 2. So return 2.
    Example 2:
        Input: nums = [1,2,2,3,1,4,2]
        Output: 6
        Explanation: 
        The degree is 3 because the element 2 is repeated 3 times.
        So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
    Constraints:
        nums.length will be between 1 and 50,000.
        nums[i] will be an integer between 0 and 49,999.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const freq = {} , last = {} , first = {};
    for ( let i = 0 ; i < nums.length ; i++ ){
        let num = nums[i];
        if ( first[num] === undefined ) first[num] = i;
        last[num] = i;
        freq[num] = ( freq[num] || 0 ) + 1;
    }
    let degree = Math.max(...Object.values(freq)) , minLength = nums.length;
    for ( let num in freq ){
        if ( freq[num] === degree ){
            minLength = Math.min(minLength, last[num] - first[num] + 1);
        }
    }
    return minLength;
};
console.log(findShortestSubArray([1 , 2 , 2 , 3 , 1]));
console.log(findShortestSubArray([1 , 2 , 2 , 3 , 1 , 4 , 2]));
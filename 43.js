/* 
    219. Contains Duplicate II
    Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
    in the array such that nums[i] == nums[j] and abs(i - j) <= k.

    Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true
*/
var containsNearbyDuplicate = function(nums, k) {
    const hashMap = new Map()
    for ( let i = 0 ; i < nums.length ; i++ ){
        let num = nums[i]
        if ( hashMap.has(num) && ( i - hashMap.get(num)) <= k) return true
        hashMap.set(num)
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3] , 2))
/* 
    217. Contains Duplicate
    Given an integer array nums, return true if any value appears at least twice in the array, 
    and return false if every element is distinct.

    Example 1:
    Input: nums = [1,2,3,1]
    Output: true

    Example 2:
    Input: nums = [1,2,3,4]
    Output: false

    Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true

*/
var containsDuplicate = function(nums) {
    let counts = nums.reduce( (acc , key) => {
        acc[key] = (acc[key] || 0) + 1;
        return acc
    } , {})
    for ( let key in counts ){
        if (counts[key] > 1){
            return true
        }
    }
    return false
};
console.log(containsDuplicate([ ]))
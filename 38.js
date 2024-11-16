/* 
    169. Majority Element
    Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.
    Example 1:

    Input: nums = [3,2,3]
    Output: 3
    Example 2:

    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
*/
var majorityElement = function(nums) {
    let n = nums.length
    //convert the array to key-value pair object
    let counts = nums.reduce( (acc , val) => {
        acc[val] = (acc[val] || 0 ) + 1;
        return acc
    } , {})
    for (let key in counts ){
        if ( counts[key] > Math.floor(n / 2))
        {
            return key
        }
    }
};
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))
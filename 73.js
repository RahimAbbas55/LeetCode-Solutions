/*
    448. Find All Numbers Disappeared in an Array
        Given an array nums of n integers where nums[i] is in the range [1, n], return an array 
        of all the integers in the range [1, n] that do not appear in nums.

    Example 1:
        Input: nums = [4,3,2,7,8,2,3,1]
        Output: [5,6]
    Example 2:
        Input: nums = [1,1]
        Output: [2]
    Constraints:
        n == nums.length
        1 <= n <= 105
        1 <= nums[i] <= n
*/
var findDisappearedNumbers = function(nums) {
    let upperRange = nums.length , lowerRange = 1 , result = [] , mainArr = [];
    // initialize a marked array
    for ( let i = 0 ; i < upperRange ; i++ ){
        mainArr.push(i + 1);
    }
    // convert nums to a set 
    const set = new Set(nums);
    // check if mainArr has the set element. if it has the element, mark the element in mainArr as negative(visited)
    for ( let i = 0 ; i < mainArr.length ; i++ ){
        if ( set.has(mainArr[i])){
            mainArr[i] *= -1;
        }
    }
    // push positive values in the result array
    for ( let i = 0 ; i < mainArr.length ; i++ ){
        if ( mainArr[i] > 0 ){
            result.push( mainArr[i] );
        }
    }
    return result;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))
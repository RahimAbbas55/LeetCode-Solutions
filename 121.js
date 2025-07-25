/*
    1394. Find Lucky Integer in an Array
    Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
    Return the largest lucky integer in the array. If there is no lucky integer return -1.
    Example 1:
        Input: arr = [2,2,3,4]
        Output: 2
        Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
    Example 2:
        Input: arr = [1,2,2,3,3,3]
        Output: 3
        Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
    Example 3:
        Input: arr = [2,2,2,3,3]
        Output: -1
        Explanation: There are no lucky numbers in the array.
    Constraints:
        1 <= arr.length <= 500
        1 <= arr[i] <= 500
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let result = [];
  const map = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  for (const num in map) {
    if (map[num] === Number(num)) {
      result.push(Number(num));
    }
  }
  return result.length ? Math.max(...result) : -1 ;
};
console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));

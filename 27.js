/*
    MERGE TWO SORTED ARRAYS
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
    representing the number of elements in nums1 and nums2 respectively.
    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
    To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
    and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/
/*  TEST CASE:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/
/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //when array 1 is empty, copy array 2 in array 1 and return
    if ( m === 0 ){
        nums1 = nums2
        return
    }
    //when array 2 is empty, simply return without changing aything in array 11
    else if ( n === 0 ){
        return
    } 
    //when both arrays are not empty
    else{
       let i = 0 , k =0
       //iterate nums1 till it encounters 0
       while ( nums1[i] !== 0 ){
        i++
       }
       //add nums2 element to nums1
       while ( i < m ){
        nums1[i] = nums2[k]
        k++
        i++
       }
       //sort the array
       nums1.sort()
       console.log(nums1);
    }
};
console.log(merge([1,2,3,0,0,0] , 6 , [2,3,5] , 3));
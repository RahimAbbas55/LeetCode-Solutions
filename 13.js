/* 
    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

//Correct solution
var removeDuplicates = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) continue;
      else {
          arr.push(nums[i]);
      };
    }
    return arr;
  };
  // console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
  console.log(removeDuplicates([1 , 1 , 2]));
  
  
  //By Over-Writing
  var removeDuplicates = function(nums) {
      if ( nums.length === 0 ) return 0;
  
      let  k = 1;
      for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[k - 1])
      { 
          nums[k] = nums[i];
          k++;    
      }
    }
    return k;
  };
  
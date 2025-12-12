/*
    18. 4Sum
        Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
        0 <= a, b, c, d < n
        a, b, c, and d are distinct.
        nums[a] + nums[b] + nums[c] + nums[d] == target
        You may return the answer in any order.
    Example 1:
        Input: nums = [1,0,-1,0,-2,2], target = 0
        Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    Example 2:
        Input: nums = [2,2,2,2,2], target = 8
        Output: [[2,2,2,2]]
    Constraints:
        1 <= nums.length <= 200
        -109 <= nums[i] <= 109
        -109 <= target <= 109
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 4Sum
var fourSum = function(nums, target) {
    let res = [];
    nums.sort(
        (a , b) => a - b
    )
    // 4Sum Approach
    for ( let i = 0 ; i < nums.length ; i++ ){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for ( let j = i + 1 ; j < nums.length ; j++ ){
            if ( j > i + 1 && nums[j] === nums[j - 1] ) continue;
            let left = j + 1 , right = nums.length - 1;
            while ( left < right ){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if ( sum === target ){
                    res.push([
                        nums[i] , nums[j] , nums[left] , nums[right]
                    ]);
                    while ( left < right && nums[left] === nums[left + 1] ) left++;
                    while ( left < right && nums[right] === nums[right - 1] ) right--;
                    left++;
                    right--;
                }
                else if ( sum > target ) right--;
                else left++;
            }
        }
    }
    return res;
};

//KSum
var fourSum = function(nums , target){
    nums.sort(
        (a , b) => a - b
    );
    let res = [] , quad = [];
    const kSum = (k , start , target) => {
        if ( k != 2 ){
            for ( let i = start ; i < nums.length - k + 1 ; i++ ){
                if ( i > start && nums[i] === nums[i - 1] ) continue;
                quad.push(nums[i]);
                kSum(k - 1 , i + 1 , target - nums[i]);
                quad.pop();
            }
            return;
        }
        let l = start , r = nums.length - 1;
        while ( l < r ){
            if ( nums[l] + nums[r] === target ){
                res.push([...quad , nums[l] , nums[r]]);
                while ( l < r && nums[l] === nums[l + 1] ) l++;
                l++;
                r--;
            }
            else if ( nums[l] + nums[r] < target ) l++;
            else r--;
        }
    }
    kSum(4 , 0 , target);
    console.log(res)
}
console.log(fourSum([1,0,-1,0,-2,2] , 0));
console.log(fourSum([2,2,2,2,2] , 8))
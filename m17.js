/*
    40. Combination Sum II
        Given a collection of candidate numbers (candidates) and a target number (target), 
        find all unique combinations in candidates where the candidate numbers sum to target.
        Each number in candidates may only be used once in the combination.
        Note: The solution set must not contain duplicate combinations.
    Example 1:
        Input: candidates = [10,1,2,7,6,1,5], target = 8
        Output: 
        [
        [1,1,6],
        [1,2,5],
        [1,7],
        [2,6]
        ]
    Example 2:
        Input: candidates = [2,5,2,1,2], target = 5
        Output: 
        [
        [1,2,2],
        [5]
        ]
    Constraints:
        1 <= candidates.length <= 100
        1 <= candidates[i] <= 50
        1 <= target <= 30
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort(
        (a , b) => a - b
    );
    const dfs = (i , cur , total) => {
        // Base case
        if (total === target){
            res.push([...cur]);
            return;
        }
        if (i >= candidates.length || total > target) return;
        // Recursive Calls
        // Call 1: including the candidate[i]
        // Use "i + 1" for the 1st call because if we use only i, it will use that index multiple time which will make it "Combination Sum I"
        cur.push(candidates[i]);
        dfs(i + 1 , cur , total + candidates[i]);
        
        cur.pop();
        // While loop to skip the duplicates
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;
        // Call 2 : not including the candidates[i]
        dfs(i + 1 , cur , total);
    }
    dfs(0 , [] , 0);
    return res;
};
console.log(combinationSum2([10 , 1 , 2 , 7 , 6 , 1, 5] , 8));
console.log(combinationSum2([2 , 5 , 2 , 1 , 2] , 5));
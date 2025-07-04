/*
    653. Two Sum IV - Input is a BST
    Given the root of a binary search tree and an integer k, return true if there exist two 
    elements in the BST such that their sum is equal to k, or false otherwise.
*/
var findTarget = function(root, k) {
    const seen = new Set();
    function dfs(node){
        if ( !node ) return false;
        if ( seen.has(k - node.val) ) return true;
        seen.add(node.val);

        return dfs(node.left) || dfs(node.right);
    }  
    return dfs(root);
};
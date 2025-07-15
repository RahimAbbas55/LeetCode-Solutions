/*
    783. Minimum Distance Between BST Nodes
    Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two 
    different nodes in the tree.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let prev = null;
    let minDiff = Infinity;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;

        inorder(node.right);
    }

    inorder(root);
    return minDiff;
};
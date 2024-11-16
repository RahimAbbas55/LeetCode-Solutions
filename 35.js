/* 
    144. Binary Tree Preorder Traversal
    Given the root of a binary tree, return the preorder traversal of its nodes' values.
    Example 1:
    Input: root = [1,null,2,3]
    Output: [1,2,3]
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var preorderTraversal = function(root) {
    const result = [];
    const traverse = (node) => {
        if (node === null) {
            return;
        }
        result.push(node.val); // Visit the root node
        traverse(node.left);   // Recursively visit the left subtree
        traverse(node.right);  // Recursively visit the right subtree
    };
    traverse(root);
    return result;
};

// Example Usage:
// Creating a binary tree for testing purposes
//      1
//       \
//        2
//       /
//      3

let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(preorderTraversal(tree)); 


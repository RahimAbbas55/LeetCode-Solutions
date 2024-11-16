/* 
    145. Binary Tree Postorder Traversal
    Given the root of a binary tree, return the postorder traversal of its nodes' values.
    Example 1:
    Input: root = [1,null,2,3]
    Output: [3,2,1]
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var postorderTraversal = function(root) {
    let result = []
    const traverse = (node) => {
        if ( node === null ) return
        traverse(node.left)
        traverse(node.right)
        result.push(node.val)
    }
    traverse(root)
    return result
};
let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(postorderTraversal(tree)); 
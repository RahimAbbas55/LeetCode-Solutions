/*
    Binary Tree Inorder Traversal
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var inorderTraversal = function (root) {
    let result = []
    var helperFunc = function (root) {
        if( !root ) return
        helperFunc(root.left)
        result.push(node.val)
        helperFunc(root.right)
    }
    helperFunc(root)
    return result
};


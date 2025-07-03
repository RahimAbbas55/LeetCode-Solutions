/*
    501. Find Mode in Binary Search Tree
    Given the root of a binary search tree (BST) with duplicates, return all the mode(s) 
    (i.e., the most frequently occurred element) in it.
    If the tree has more than one mode, return them in any order.
    Assume a BST is defined as follows:
    The left subtree of a node contains only nodes with keys less than or equal to the node's key.
    The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
    Both the left and right subtrees must also be binary search trees.
*/
var findMode = function(root) {
    let prev = null;
    let count = 0;
    let maxCount = 0;
    let modes = [];

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);

        if (prev === node.val) {
            count++;
        } else {
            count = 1;
            prev = node.val;
        }

        if (count > maxCount) {
            maxCount = count;
            modes = [node.val];
        } else if (count === maxCount) {
            modes.push(node.val);
        }

        inorder(node.right);
    };

    inorder(root);
    return modes;
};

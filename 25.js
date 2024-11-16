/*
    SAME TREE
    RETURN TRUE IF ALL THE NODES OF THE TREE ARE SAME;
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//FOR SOME REASON THIS CODE DOESNOT WORKS ON LEET CODE COMPILER
var inorder = function (root, arr) {
  if (!root) return;
  inorder(root.left, arr);
  if (root.val === null) arr.push(0);
  else arr.push(root.val);
  inorder(root.right, arr);
};
var isSameTree = function (p, q) {
  //we will perform inorder traversal on both trees and store the node values of each tree separately.
  //Then compare it. if all element are same, simplye return true. else return false
  let arr1 = [],
    arr2 = [],
    flag = true;
  if (p === null && q === null) {
    console.log("in if block 1");
    return flag;
  }
  if (p === null || q === null) {
    console.log("in if block 2");
    return false;
  }
  inorder(p, arr1);
  inorder(q, arr2);

  console.log(arr1.length, arr2.length);
  console.log(arr1, arr2);
  if (arr1.length <= 0 !== arr2.length <= 0) {
    console.log("in if block 3");
    return false;
  } else {
    console.log("in if/else block 1");
    for (let i = 0; i < arr1.length && i < arr2.length; i++) {
      if (arr1[i] === arr2[i]) {
        flag = true;
        continue;
      } else {
        flag = false;
        break;
      }
    }
  }
  return flag;
};
function main() {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(1);
  // root1.right = new TreeNode(3);

  const root2 = new TreeNode(1);
  root2.left = new TreeNode(null);
  root2.right = new TreeNode(1);

  const areSame = isSameTree(root1, root2);
  console.log(areSame);
}
main();

//ANOTHER APPROACH
var isSameTree = function (p, q) {
  // Base cases:
  if (p === null && q === null) return true; // Both trees are empty
  if (p === null || q === null) return false; // One tree is empty, the other is not

  // Check if root node values match
  if (p.val !== q.val) return false;

  // Recursively compare left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

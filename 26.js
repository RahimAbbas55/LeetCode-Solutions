/*
    SYMMETRIC TREE
*/
// var isSymmetric = function (root) {
//   // If the root is null, consider it symmetric (empty tree)
//   if (!root) return true;
//   function isMirror(left, right) {
//     // If both nodes are null, they are mirror images (both empty)
//     if (!left && !right) return true;

//     // If one node is null and the other isn't, not mirror images
//     if (!left || !right) return false;

//     // Check if node values are the same and subtrees are mirrors
//     return (
//       left.val === right.val &&
//       isMirror(left.left, right.right) &&
//       isMirror(left.right, right.left)
//     );
//   }

//   // Call helper function to compare left and right subtrees of root
//   return isMirror(root.left, root.right);
// };

//Approach 2
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var BFS = (root, arr) => {
  // If the root is null, add -1 to the array
  if (!root) {
    arr.push(-1);
    return;
  }
  // Create a queue to store nodes for BFS traversal
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    // Dequeue a node from the queue
    const node = queue.shift();

    // Add node value to the array (or -1 if null)
    arr.push(node ? node.val : -1);

    // Add non-null children to the queue for further traversal
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};
function main() {
    const root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    let arr = []
    BFS(root1, arr)
    console.log(arr);
}
main();

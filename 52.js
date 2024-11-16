/* 
    257. Binary Tree Paths
    Given the root of a binary tree, return all root-to-leaf paths in any order.
    A leaf is a node with no children.
*/
function binaryTreePaths(root) {
    // This array will store all the paths
    const paths = [];

    // Helper function for DFS traversal
    function dfs(node, currentPath) {
        if (!node) return;

        // Append current node value to the path
        currentPath += node.val;

        // If it's a leaf node, add the path to the paths array
        if (!node.left && !node.right) {
            paths.push(currentPath);
        } else {
            // If not a leaf, add the '->' and continue the DFS
            currentPath += '->';
            dfs(node.left, currentPath);
            dfs(node.right, currentPath);
        }
    }
    // Initialize DFS traversal with an empty path
    dfs(root, '');
    return paths;
}

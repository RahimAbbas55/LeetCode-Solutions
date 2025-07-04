/*
    637. Average of Levels in Binary Tree
    Given the root of a binary tree, return the average value of the nodes on each level in the 
    form of an array. Answers within 10-5 of the actual answer will be accepted.
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelSum / levelSize);
    }

    return result;
};
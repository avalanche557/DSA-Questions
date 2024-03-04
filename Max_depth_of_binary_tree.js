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
var maxDepth = function(root, res = 1) {
    if(root === null) {
        return 0
    }
    res = res + Math.max(maxDepth(root.left, res), maxDepth(root.right, res))

    return res
    
};
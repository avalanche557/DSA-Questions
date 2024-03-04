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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) {
        return true
    }
    let lHeight = isBalanced(root.left);
    let rHeight = isBalanced(root.right)
    if(lHeight === false || rHeight === false) return false
    if(Math.abs(lHeight - rHeight) > 1) return false
    return Math.max(lHeight, rHeight)+1
};
